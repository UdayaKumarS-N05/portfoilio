import { useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark, HiMiniArrowDownTray } from "react-icons/hi2";

function Resume({ onClose }) {
  const [showOptions, setShowOptions] = useState(false);
  return createPortal(
    <div
      className="bg-[rgba(255, 255, 255, 0.1)] w-screen h-screen z-[1000] absolute -top-0 left-0 backdrop-blur-[1.5px]"
      onClick={onClose}
    >
      {showOptions && (
        <button
          onClick={onClose}
          className="absolute right-[32%] top-12 hover:bg-red-500 bg-red-500/70 w-8 h-8 grid place-items-center rounded-full hover:scale-150 transition-all"
        >
          <HiXMark />
        </button>
      )}
      <div className="w-[80%] h-[80%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex  justify-center ">
        <img
          src="./resume.jpg"
          className="w-auto h-auto border border-1 border-slate-950 rounded-md z-10001"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onMouseEnter={() => setShowOptions(true)}
        />
      </div>
      <a
        href="Udaya_KumarS_Resume_React.pdf"
        download="Udaya_KumarS_Resume_React.pdf"
      >
        {showOptions && (
          <button className="absolute right-[32%] bottom-[4.7rem]  hover:bg-blue-500 bg-blue-500/70 w-8 h-8 grid place-items-center rounded-full hover:scale-150 transition-all ">
            <HiMiniArrowDownTray />
          </button>
        )}
      </a>
    </div>,
    document.body
  );
}

export default Resume;
