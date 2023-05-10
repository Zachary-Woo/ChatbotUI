import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faChevronLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import image from "./images/image.png";
import CbInfo from './CbInfo';

const CbHeader = ({ toggleChat }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="bg-gradient-to-r from-orange-700 to-orange-400 flex items-center justify-between p-4 rounded-t-2xl shadow">
      {/* Info Toggle Button */}
      <div className="relative mx-2">
        <FontAwesomeIcon icon={faInfoCircle} className="w-5 h-5 px-1.5 py-1.5 rounded-full hover:text-orange-100 text-orange-100 text-xl absolute top-[-3rem] right-[-.5rem]" />
        <button
          onClick={handleInfoClick}
          className="text-orange-100 text-xl focus:outline-none absolute top-[-3rem] right-[-.5rem]"
        >
          <FontAwesomeIcon icon={faInfoCircle} className="w-5 h-5 px-1.5 py-1.5 rounded-full hover:text-orange-100 z-10 hover:animate-[ping_2s_ease-in-out_infinite]" />
        </button>

        {/* Info Content Container */}
        {showInfo && (
          <div
            className="absolute bottom-9 right-3 bg-white rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl p-3 text-black shadow-md w-64"
          >
            <CbInfo />
          </div>
        )}

        {/* Expand Button */}
        <Link to="/doc-r">
          <button className="text-orange-100 text-xl focus:outline-none absolute top-[-1rem] right-[-0.5rem]" >
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 px-1.5 py-1.5 rounded-r-lg z-10 hover:bg-orange-100 hover:text-orange-700 hover:-translate-x-1" />
          </button>
        </Link>
      </div>

      {/* Img, Agent, Text */}
      <div className="flex items-center">
        <div className="mr-2">
          <img src={image} alt="image" style={{ height: "50px", width: "50px" }} className="rounded-full z-1" />
        </div>
        <div>
          <h4 className="text-lg text-white">GPT Interface</h4>
          <p className="text-sm text-white">Ask a question or click to expand for more features</p>
        </div>
      </div>

      {/* Close button */}
      <div className="relative">
        <button className="text-white text-xl focus:outline-none absolute top-[-3.1rem] right-[-1rem]" onClick={toggleChat}>
          <FontAwesomeIcon icon={faTimes} className="w-6 h-6 px-1.5 py-1.5 rounded-full hover:bg-orange-200" />
        </button>
      </div>
    </div>
  );
};

export default CbHeader;