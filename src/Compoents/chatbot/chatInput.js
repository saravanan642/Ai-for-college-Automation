import React, { useState } from "react";
import { getBotReply } from "../../Client/api";

function ChatInput({ setMessages }) {

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input) return;

    const userMessage = { sender: "user", text: input };

    setMessages((prev) => [...prev, userMessage]);

    const reply = getBotReply(input);

    const botMessage = { sender: "bot", text: reply };

    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  return (
    <div className="flex gap-2 p-2 border-t">
      <input
        type="text"
        className="flex-1 border p-2 rounded"
        placeholder="Ask something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;