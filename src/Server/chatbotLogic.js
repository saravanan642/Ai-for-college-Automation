import collegeData from "./collegeData";

function chatbotLogic(message) {

  const msg = message.toLowerCase();

  if (msg.includes("course")) {
    return collegeData.courses;
  }

  if (msg.includes("fees")) {
    return collegeData.fees;
  }

  if (msg.includes("hostel")) {
    return collegeData.hostel;
  }

  if (msg.includes("location")) {
    return collegeData.location;
  }

  if (msg.includes("admission")) {
    return collegeData.admission;
  }

  if (msg.includes("contact")) {
    return collegeData.contact;
  }

  return "Sorry, I didn't understand. Please ask about courses, fees, hostel, admission or location.";
}

export default chatbotLogic;