import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faMicrophone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const CbFooter = ({ isRecording, setIsRecording, input, handleChange, handleKeyDown, handleClick }) => {
  return (
    <div className="bg-gradient-to-l from-orange-700 to-orange-400 flex items-center justify-between p-4 rounded-bl-2xl rounded-br-2xl shadow-md">
      <button
        className="px-2 py-1 text-white rounded-lg hover:bg-orange-200 hover:text-black"
      >
        <FontAwesomeIcon icon={faPaperclip} />
      </button>

      <button
        onClick={() => setIsRecording(!isRecording)}
        className={`${
          isRecording
            ? "text-red-600 animate-pulse bg-orange-200 hover:text-red-600"
            : ""
          } text-white p-2 rounded-full hover:bg-orange-200 hover:text-black`} /* Add Recording Effects */
      >
        <FontAwesomeIcon icon={faMicrophone} />
      </button>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Write a message..."
        className="border-none px-4 py-2 rounded-full text-center hover:bg-gray-200"
      />

      <button
        onClick={handleClick}
        className="px-2.5 py-1 text-white rounded-full hover:bg-orange-200 hover:text-black"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default CbFooter;