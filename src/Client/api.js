import axios from "axios";

export const getBotReply = async (message) => {

const res = await axios.post("http://localhost:5000/chat",{
message:message
});

return res.data.reply;

};