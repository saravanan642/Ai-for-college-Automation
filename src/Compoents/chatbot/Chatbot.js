import React,{useState} from "react";
import ChatButton from "./ChatButton";
import ChatInput from "./chatInput";
import ChatMessage from "./chatMessgae";

function Chatbot(){

const [open,setOpen] = useState(false);

const [messages,setMessages] = useState([
{sender:"bot",text:"Hello 👋 Ask me about college courses, fees, hostel."}
]);

const toggleChat = ()=>{
setOpen(!open)
}

return(

<>

<ChatButton toggleChat={toggleChat}/>

{open && (

<div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-xl flex flex-col">

<div className="bg-blue-600 text-white p-3 text-center font-semibold">
College AI Assistant
</div>

<div className="h-64 overflow-y-auto p-3 bg-gray-50">

{messages.map((msg,i)=>(
<ChatMessage key={i} message={msg}/>
))}

</div>

<ChatInput setMessages={setMessages}/>

</div>

)}

</>

)

}

export default Chatbot;