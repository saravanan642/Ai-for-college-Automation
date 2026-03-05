const data = require("./collegeData");

function getReply(message){

message = message.toLowerCase();

if(message.includes("department"))
return data.department;

if(message.includes("transport") || message.includes("bus"))
return data.transport;

if(message.includes("fees"))
return data.fees;

if(message.includes("food") || message.includes("canteen"))
return data.food;

if(message.includes("hostel"))
return data.hostel;

if(message.includes("placement"))
return data.placement;

if(message.includes("events"))
return data.events;

if(message.includes("sports"))
return data.sports;

if(message.includes("campus"))
return data.campus;

if(message.includes("library"))
return data.library;

if(message.includes("counselling"))
return data.counselling;

if(message.includes("history"))
return data.history;

return "Please ask about department, transport, fees, hostel or placement.";

}

module.exports = getReply;