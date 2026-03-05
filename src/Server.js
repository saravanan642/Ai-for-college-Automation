const express = require("express");
const cors = require("cors");

const getReply = require("./src/Server/chatbotLogic");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat",(req,res)=>{

const message = req.body.message;

const reply = getReply(message);

res.json({reply});

});

app.listen(5000,()=>{
console.log("AI College Chatbot running on port 5000");
});