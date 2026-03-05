import React from "react";

function ChatMessage({message}){

return(

<div className={`flex ${message.sender==="user"?"justify-end":"justify-start"} mb-2`}>

<div className={`px-4 py-2 rounded-lg text-sm ${
message.sender==="user"
? "bg-blue-600 text-white"
: "bg-gray-200"
}`}>

{message.text}

</div>

</div>

)

}

export default ChatMessage;