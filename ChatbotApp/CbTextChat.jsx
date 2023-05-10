import React from 'react';

const TextChat = ({ messages, messageListRef }) => {
  const breakText = (text, maxLength = 38, maxWordLength = 20) => {
    // Split the input text into words
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
  
    words.forEach((word) => {
      // If the word length is greater than maxWordLength, split it into smaller chunks
      if (word.length > maxWordLength) {
        word = word.match(new RegExp(`.{1,${maxWordLength}}`, 'g')).join(' ');
      }
  
      // Check if adding the word to the current line will exceed the maxLength
      if (currentLine.length + word.length + 1 <= maxLength) {
        // If it doesn't exceed maxLength, add the word to the current line
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        // If it exceeds maxLength, push the current line to the lines array
        lines.push(currentLine);
        currentLine = word;
      }
    });
  
    // After iterating through all words, push the last line to the lines array
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  };
  
  

  return (
    <div>
      {/* Message container */}
      <div ref={messageListRef} className="h-80 overflow-y-auto bg-orange-200 p-5">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-4 ${
              message.sender === 'me' ? 'text-right ml-auto' : 'text-left mr-auto'
            }`}
          >
            {/* Message Bubbles */}
            <div
              className={`${
                message.sender === 'me' ? 'bg-gray-300 rounded-br-2xl' : 'bg-orange-700 text-white rounded-bl-2xl'
              } p-2 mt-2 rounded-tl-2xl rounded-tr-2xl max-w-7/12`}
            >
              {breakText(message.text).map((chunk, chunkIndex) => (
                <div key={chunkIndex}>{chunk}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextChat;