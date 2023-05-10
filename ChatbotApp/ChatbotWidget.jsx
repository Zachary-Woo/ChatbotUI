import React, { useState, useEffect, useRef } from 'react';
import TextChat from './CbTextChat';
import CbHeader from './CbHeader';
import CbFooter from './CbFooter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';


const ChatbotWidget = () => {
  // State to toggle the chatbot visibility
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // States for recording, messages, and user input
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Reference to the message container div
  const messageListRef = useRef(null);

  // Effect to scroll to the bottom of the message container when messages change
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to handle the input change
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // Function to handle sending the message on button click
  const handleClick = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "me" }]);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response.", sender: "bot" },
        ]);
      }, 1000); // 1 second delay before the bot responds
    }
  };

  // Function to handle sending the message on pressing Enter key
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && input.trim()) {
      setMessages([...messages, { text: input, sender: "me" }]);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response.", sender: "bot" },
        ]);
      }, 1000); // 1 second delay before the bot responds
    }
  };

  return (
    <div className="fixed bottom-8 right-0 mb-10 mr-4">
      <div className="chatbox">
        {isChatOpen && (

          /* Chatbot page positioning and size */
          <div
            className={`bg-orange-200 rounded-t-2xl shadow-md`}
            style={{
              height: '450px',
              width: '350px',
              marginBottom: '100px',
              marginRight: '20px',
            }}
          >

            {/* Chat header */}
            <CbHeader toggleChat={toggleChat} />
            
            {/* Chat messages */}
            <div className="overflow-y-auto">
                {isChatOpen && <TextChat messages={messages} messageListRef={messageListRef} />}
            </div>

            {/* Message input and icons */}
            <CbFooter
              isRecording={isRecording}
              setIsRecording={setIsRecording}
              input={input}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
              handleClick={handleClick}
            />
          </div>
        )}
        
        {/* Chat toggle button */}
        <div className="fixed bottom-0 right-0 mb-4 mr-4">
          <button
            onClick={toggleChat}
            className="px-4 py-2 bg-[#ff8432] text-orange-100 border-none focus:outline-none rounded-full shadow cursor-pointer hover:bg-orange-300"
          >
            <FontAwesomeIcon icon={faComments} className='h-10 w-10'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;