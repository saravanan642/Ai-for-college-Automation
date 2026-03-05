import React from "react";

function ChatMessage({ message }) {
  return (
    <div
      className={`p-2 my-1 ${
        message.sender === "user" ? "text-right" : "text-left"
      }`}
    >
      <span
        className={`px-3 py-2 rounded-lg ${
          message.sender === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-black"
        }`}
      >
        {message.text}
      </span>
    </div>
  );
}

export default ChatMessage;