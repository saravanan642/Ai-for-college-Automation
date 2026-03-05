import React,{useState} from "react";
import {getBotReply} from "../../Client/api";

function ChatInput({setMessages}){

const [input,setInput] = useState("");

const sendMessage = async ()=>{

if(!input) return;

const userMessage = {sender:"user",text:input};

setMessages(prev=>[...prev,userMessage]);

const reply = await getBotReply(input);

const botMessage = {sender:"bot",text:reply};

setMessages(prev=>[...prev,botMessage]);

setInput("");

}

return(

<div className="flex border-t p-2">

<input
className="flex-1 border px-3 py-2 rounded"
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Ask about courses, fees..."
/>

<button
onClick={sendMessage}
className="ml-2 bg-blue-600 text-white px-4 rounded"
>
Send
</button>

</div>

)

}

export default ChatInput;