import React from "react";

const ChatButton = () => (
  <button
    onClick={() => alert("Chat feature coming soon!")}
    className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
    title="Chat with us"
  >
    💬
  </button>
);

export default ChatButton;