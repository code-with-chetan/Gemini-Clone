import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, input, setInput } =
    useContext(Context);

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-[22px] p-5 text-[#585858]">
        <p>Gemini</p>
        <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="user icon" />
      </div>

      <div className="max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="mx-[50px] my-[0px] text-5xl text-[#c4c7c5] font-medium p-5">
              <p>
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-red-500 gradient-text-clip text-transparent max-[600px]:text-4xl">
                  Hello, Coder
                </span>
              </p>
              <p className="max-[600px]:text-4xl">How can I help you Today?</p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-5">
              <div className="card">
                <p className="para-div">
                  Suggest beautiful places to see on an Upcoming road trip
                </p>
                <img src={assets.compass_icon} alt="compass icon" className="div-icon" />
              </div>

              <div className="card max-[600px]:hidden">
                <p className="para-div">Brifely summarize the place:urban area</p>
                <img src={assets.bulb_icon} alt="bulb icon" className="div-icon" />
              </div>

              <div className="card max-[600px]:hidden">
                <p className="para-div">
                  Suggest beautiful places which is visited on Nepal in cold season
                </p>
                <img src={assets.message_icon} alt="message icon" className="div-icon" />
              </div>

              <div className="card max-[600px]:hidden">
                <p className="para-div">
                  Suggest beautiful places to see on an Upcoming mountain trip.
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

            <div className="flex items-start gap-5">
              <img src={assets.gemini_icon} alt="gemini icon" />
              {loading ? (
                <div className="w-full flex flex-col gap-[10px]">
                  <hr className="hr-skeleton-pulse" />
                  <hr className="hr-skeleton-pulse" />
                  <hr className="hr-skeleton-pulse" />
                </div>
              ) : (
                <div
                  className="text-[17px] leading-[1.7] text-gray-800"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></div>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 w-full max-w-[900px] px-0 py-5 max-[600px]:p-[7px_10px]">
          <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] px-4 py-3 rounded-[50px]">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 border-none outline-none text-[18px] p-[4px] max-[600px]:flex-none max-[600px]:w-fit"
              type="text"
              placeholder="Enter a prompt Here..."
            />
            <div className="flex items-center gap-[15px] max-[600px]:gap-[5px]">
              <img src={assets.gallery_icon} alt="gallery icon" className="max-[600px]:w-5" />
              <img src={assets.mic_icon} alt="mic icon" className="max-[600px]:w-5" />
              {input && (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send icon"
                  className="max-[600px]:w-5"
                />
              )}
            </div>
          </div>
          <p className="text-[13px] mx-[15px] my-auto text-center font-light">
            Gemini may display inaccurate info, including about people, so double check its answer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
