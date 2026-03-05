const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const collegeData = require("./src/Server/collegeData");

app.post("/chat", (req, res) => {

  const message = req.body.message.toLowerCase();

  let reply = "Sorry, I don't understand your question.";

  if (message.includes("course"))
    reply = collegeData.courses;

  else if (message.includes("fees"))
    reply = collegeData.fees;

  else if (message.includes("hostel"))
    reply = collegeData.hostel;

  else if (message.includes("location"))
    reply = collegeData.location;

  else if (message.includes("admission"))
    reply = collegeData.admission;

  else if (message.includes("contact"))
    reply = collegeData.contact;

  res.json({ reply });

});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});