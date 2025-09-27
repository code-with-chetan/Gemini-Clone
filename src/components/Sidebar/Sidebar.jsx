import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const{onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context);

    const loadPrompt=async(prompt)=>{
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <div className="flex flex-col justify-between min-h-screen bg-[#f0f4f9] px-[20px] py-[15px]
        max-[600px]:hidden">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} src={assets.menu_icon} alt="menu icon"
                    className="block ml-[10px] cursor-pointer" />
                <div onClick={()=>newChat()} className="mt-[50px] inline-flex items-center gap-[10px] px-[10px] py-[10px]
                bg-[#e6eaf1] rounded-full text-[14px] text-gray-600 cursor-pointer">
                    <img src={assets.plus_icon} alt="plus icon" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="flex flex-col animate-[fadeIn_1s_ease-in-out]">
                        <p className="mt-[30px] mb-[20px]">Recent</p>
                        {
                            prevPrompt.map((items,index)=>{
                                return(

                                <div onClick={()=>loadPrompt(items)} className="recent-entry" key={index}>
                                     <img src={assets.message_icon} alt="message icon" />
                                      <p>{items.slice(0,18)} ...</p>
                                    </div>
                                    
                                )
                            })
                        }
                       
                    </div>
                    : null}

            </div>

            <div className="flex flex-col">
                <div className="bottom-items recent-entry">
                    <img src={assets.question_icon} alt="question icon" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-items recent-entry">
                    <img src={assets.history_icon} alt="history icon" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-items recent-entry">
                    <img src={assets.setting_icon} alt="setting icon" />
                    {extended ? <p>Settings</p> : null}
                </div>

            </div>

        </div>
    )
}

export default Sidebar;