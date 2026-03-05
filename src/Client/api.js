import chatbotLogic from "../Server/chatbotLogic";

export const getBotReply = (message) => {
  return chatbotLogic(message);
};