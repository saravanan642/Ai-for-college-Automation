const data = require("./collegeData");

function getReply(message){

message = message.toLowerCase();

// COURSES

if(
message.includes("course") ||
message.includes("courses") ||
message.includes("course enna") ||
message.includes("course iruka") ||
message.includes("courses enna")
){
return data.courses;
}

// FEES

if(
message.includes("fees") ||
message.includes("fee") ||
message.includes("fees evlo") ||
message.includes("kattanam") ||
message.includes("fees amount")
){
return data.fees;
}

// HOSTEL

if(
message.includes("hostel") ||
message.includes("hostel iruka") ||
message.includes("stay facility")
){
return data.hostel;
}

// LOCATION

if(
message.includes("location") ||
message.includes("enga iruku") ||
message.includes("college location")
){
return data.location;
}

// ADMISSION

if(
message.includes("admission") ||
message.includes("apply") ||
message.includes("seat")
){
return data.admission;
}

// PLACEMENT

if(
message.includes("placement") ||
message.includes("job")
){
return data.placement;
}

// CONTACT

if(
message.includes("contact") ||
message.includes("phone")
){
return data.contact;
}

return "Please ask about courses, fees, hostel, admission or placement.";

}

module.exports = getReply;