import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatWindow from "./ChatWindow";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-40 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
        title="Chat with us"
      >
        <MessageCircle size={24} />
      </button>
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default ChatButton;