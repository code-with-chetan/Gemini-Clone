import {assets} from "../../assets/assets";

const Sidebar=()=>{
    return(
        <div className="flex flex-col justify-between min-h-screen bg-[#f0f4f9] px-[25px] py-[15px]">
            <div className="top">
                <img src={assets.menu_icon} alt="menu icon" className="block ml-[10px] cursor-pointer"/>
                <div className="New-chats">
                    <img src={assets.plus_icon} alt="plus icon" />
                    <p>New Chat</p>
                </div>
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="message icon" />
                        <p>What is React</p>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="bottom-items recent-entry">
                    <img src={assets.question_icon} alt="question icon" />
                    <p>Help</p>
                </div>
                <div className="bottom-items recent-entry">
                    <img src={assets.history_icon} alt="history icon" />
                    <p>Activity</p>
                </div>
                <div className="bottom-items recent-entry">
                    <img src={assets.setting_icon} alt="setting icon" />
                    <p>Settings</p>
                </div>

            </div>

        </div>
    )
}

export default Sidebar;