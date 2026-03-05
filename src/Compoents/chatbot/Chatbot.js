import React, { useState } from "react";
import ChatMessage from "./ChatButton";
import ChatInput from "./chatInput";
import ChatButton from "./ChatButton";

function Chatbot() {

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 Welcome to our college. Ask your question!" }
  ]);

  const toggleChat = () => {
    setOpen(!open);
  };

  return (
    <>
      <ChatButton toggleChat={toggleChat} />

      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-xl rounded-lg">

          <div className="bg-blue-600 text-white p-3 rounded-t-lg">
            College AI Assistant
          </div>

          <div className="h-64 overflow-y-auto p-2">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
          </div>

          <ChatInput setMessages={setMessages} />

        </div>
      )}
    </>
  );
}

export default Chatbot;