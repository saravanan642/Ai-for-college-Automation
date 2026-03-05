import React from "react";

function ChatButton({ toggleChat }) {
  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
    >
      💬 Chat
    </button>
  );
}

export default ChatButton;