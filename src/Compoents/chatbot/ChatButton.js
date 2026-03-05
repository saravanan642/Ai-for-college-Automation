import React from "react";

function ChatButton({toggleChat}){

return(

<button
onClick={toggleChat}
className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
>
💬
</button>

)

}

export default ChatButton;