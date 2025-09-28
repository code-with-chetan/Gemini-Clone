import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, input, setInput } =
    useContext(Context);

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-[22px] p-5 text-[#585858] max-[600px]:sticky max-[600px]:pb-[3px]">
        <p>Gemini</p>
        <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="user icon" />
      </div>

      <div className="max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="mx-[50px] my-[0px] text-5xl text-[#c4c7c5] font-medium p-5 max-[600px]:flex flex-col justify-center max-[600px]:mt-30">
              <p>
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-red-500 gradient-text-clip text-transparent max-[600px]:text-2xl">
                  Hello, Chetan
                </span>
              </p>
              <p className="max-[600px]:text-2xl">How can I help you Today?</p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-5">
              <div className="card max-[600px]:hidden max-[600px]:w-0">
                <p className="para-div">
                  Discover epic destinations to explore on your next adventure
                </p>
                <img src={assets.compass_icon} alt="compass icon" className="div-icon" />
              </div>

              <div className="card max-[600px]:hidden max-[600px]:w-0">
                <p className="para-div">Fast facts about the metropolitan buzz and energy</p>
                <img src={assets.bulb_icon} alt="bulb icon" className="div-icon" />
              </div>

              <div className="card max-[600px]:hidden max-[600px]:w-0">
                <p className="para-div">
                  Explore Nepal’s breathtaking destinations perfect for winter adventures
                </p>
                <img src={assets.message_icon} alt="message icon" className="div-icon" />
              </div>

              <div className="card max-[600px]:hidden max-[600px]:w-0">
                <p className="para-div">
                  Experience unforgettable moments from top sporting events
                </p>
                <img src={assets.code_icon} alt="code icon" className="div-icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="px-0 py-[5%] max-h-[70vh] overflow-y-scroll hide-scrollbar">
            <div className="mx-[40px] my-0 mb-7 flex items-center gap-5">
              <img src={assets.user_icon} alt="user icon" className="w-[40px] rounded-[50%]" />
              <p>{recentPrompt}</p>
            </div>

            <div className="flex items-start gap-5 max-[600px]:px-3">
              <img src={assets.gemini_icon} alt="gemini icon" className="size-8" />
              {loading ? (
                <div className="w-full flex flex-col gap-[10px]">
                  <hr className="hr-skeleton-pulse" />
                  <hr className="hr-skeleton-pulse" />
                  <hr className="hr-skeleton-pulse" />
                </div>
              ) : (
                <div
                  className="text-[17px] leading-[1.7] text-gray-800 max-[600px]:pr-2"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></div>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 w-full max-w-[900px] px-0 py-5 max-[1080px]:px-7 max-[1080px]:translate-y-5 max-[600px]:px-3 max-[600px]:py-3">
          <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] px-4 py-3 rounded-[50px] max-[600px]:bg-gray-100 max-[600px]:rounded-xl max-[600px]:shadow-md max-[600px]:p-3">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 border-none outline-none text-[18px] p-[4px] max-[600px]:text-[16px] max-[600px]:p-2 max-[600px]:rounded-md"
              type="text"
              placeholder="Enter a prompt Here..."
            />
            <div className="flex items-center gap-[15px] max-[600px]:gap-[5px]">
              <img
                src={assets.gallery_icon}
                alt="gallery icon"
                className="max-[600px]:hidden max-[600px]:w-0"
              />
              <img
                src={assets.mic_icon}
                alt="mic icon"
                className="w-6 h-6 max-[600px]:w-5 max-[600px]:h-5 cursor-pointer"
              />
              {input && (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-6 h-6 max-[600px]:w-5 max-[600px]:h-5 cursor-pointer"
                />
              )}
            </div>
          </div>
          <p className="text-[13px] mx-[15px] my-auto text-center font-light max-[600px]:text-[12px] max-[600px]:leading-snug">
            Generated, not gospel. A quick review keeps the facts real.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
