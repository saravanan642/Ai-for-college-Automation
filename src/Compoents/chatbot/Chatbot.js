import React, { useState } from "react";
import ChatButton from "./ChatButton";
import ChatInput from "./chatInput";
import ChatMessage from "./chatMessgae";

function Chatbot() {

const [open,setOpen] = useState(false);

const [messages,setMessages] = useState([
{
sender:"bot",
text:"👋 Welcome to Nandha College AI Assistant. Ask about courses, fees, hostel, admission or placement."
}
]);

const toggleChat = ()=>{
setOpen(!open)
}

return(

<>

<ChatButton toggleChat={toggleChat}/>

{open && (

<div className="fixed bottom-24 right-6 w-96 bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden border">

{/* HEADER */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-4 flex justify-between items-center">

<div className="flex items-center gap-2">

<div className="bg-white text-blue-700 font-bold px-2 py-1 rounded">
AI
</div>

<span className="font-semibold">
College Assistant
</span>

</div>

<button
onClick={toggleChat}
className="text-white hover:text-gray-200 text-lg"
>
✖
</button>

</div>

{/* MESSAGES */}

<div className="h-80 overflow-y-auto p-4 bg-gray-50">

{messages.map((msg,i)=>(
<ChatMessage key={i} message={msg}/>
))}

</div>

{/* INPUT */}

<ChatInput setMessages={setMessages}/>

</div>

)}

</>

)

}

export default Chatbot;