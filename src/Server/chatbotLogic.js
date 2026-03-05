const collegeData = require("./collegeData");

function getReply(message){

message = message.toLowerCase();

if(message.includes("course"))
return collegeData.courses;

if(message.includes("fees"))
return collegeData.fees;

if(message.includes("hostel"))
return collegeData.hostel;

if(message.includes("location"))
return collegeData.location;

return "Please ask about courses, fees, hostel, location or admission";

}

module.exports = getReply;