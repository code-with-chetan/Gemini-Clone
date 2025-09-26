import { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {

    const [extended, setExtended] = useState(false);

    return (
        <div className="flex flex-col justify-between min-h-screen bg-[#f0f4f9] px-[20px] py-[15px]">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} src={assets.menu_icon} alt="menu icon"
                    className="block ml-[10px] cursor-pointer" />
                <div className="mt-[50px] inline-flex items-center gap-[10px] px-[10px] py-[10px]
                bg-[#e6eaf1] rounded-full text-[14px] text-gray-600 cursor-pointer">
                    <img src={assets.plus_icon} alt="plus icon" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="flex flex-col">
                        <p className="mt-[30px] mb-[20px]">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="message icon" />
                            <p>What is React</p>
                        </div>
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