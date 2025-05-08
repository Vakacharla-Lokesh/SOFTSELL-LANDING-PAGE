import React, { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";

// Predefined questions and answers for fallback
const PREDEFINED_QA = [
  {
    question: "How does SoftSell work?",
    answer: "SoftSell works in three simple steps: 1) Upload your unused software licenses securely to our platform, 2) Our experts analyze and provide you with the best market valuation, 3) Receive payment quickly through your preferred payment method."
  },
  {
    question: "What types of licenses can I sell?",
    answer: "You can sell various types of software licenses including Microsoft Office, Antivirus/Security software, Creative Software, Cloud Services, and many other enterprise software licenses. Contact us for a specific evaluation."
  },
  {
    question: "How long does the process take?",
    answer: "The entire process typically takes 24-48 hours from submission to payment, depending on license verification complexity. Our team works quickly to ensure you get paid as soon as possible."
  },
  {
    question: "Is selling unused licenses legal?",
    answer: "Yes, selling unused software licenses is legal under the First Sale Doctrine for most perpetual licenses. Our legal team ensures all transactions comply with relevant laws and license agreements."
  },
  {
    question: "How much can I get for my licenses?",
    answer: "The value depends on factors like software type, version, remaining subscription time, and market demand. We offer competitive rates, typically between 40-70% of the original purchase value."
  }
];

const ChatWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { type: "bot", content: "👋 Hi there! How can I help you with software license reselling today?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [hasApiKey, setHasApiKey] = useState(false);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { type: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Check for API key or use predefined responses
    if (hasApiKey) {
      try {
        // Make API call to OpenAI
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant for SoftSell, a company that helps businesses sell their unused software licenses. Be concise and friendly." },
              { role: "user", content: inputValue }
            ],
            max_tokens: 150
          })
        });

        const data = await response.json();
        
        if (data.choices && data.choices[0]) {
          setMessages((prev) => [
            ...prev, 
            { type: "bot", content: data.choices[0].message.content }
          ]);
        } else {
          throw new Error("Invalid API response");
        }
      } catch (error) {
        console.error("OpenAI API error:", error);
        // Fallback to predefined answers if API fails
        handlePredefinedResponse(inputValue);
      }
    } else {
      // Use predefined answers
      handlePredefinedResponse(inputValue);
    }
    
    setIsLoading(false);
  };

  const handlePredefinedResponse = (query) => {
    // Try to match input with predefined questions
    const cleanQuery = query.toLowerCase().trim();
    
    // Find the best matching question
    let bestMatch = null;
    let highestScore = 0;

    PREDEFINED_QA.forEach(qa => {
      const questionWords = qa.question.toLowerCase().split(/\s+/);
      const queryWords = cleanQuery.split(/\s+/);
      
      // Simple scoring - count matching words
      let score = 0;
      queryWords.forEach(word => {
        if (word.length > 2 && questionWords.includes(word)) {
          score++;
        }
      });
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = qa;
      }
    });

    // If we found a decent match, use it
    if (bestMatch && highestScore > 0) {
      setMessages(prev => [...prev, { type: "bot", content: bestMatch.answer }]);
    } else {
      // Default response if no match found
      setMessages(prev => [
        ...prev, 
        { 
          type: "bot", 
          content: "I'm not sure about that. Would you like to know about our selling process, license types, or payment methods? You can also contact us directly at contact@softsell.com." 
        }
      ]);
    }
  };

  const handleApiKeySubmit = (e) => {
    e.preventDefault();
    if (apiKey.trim().length > 10) {
      setHasApiKey(true);
      setMessages(prev => [
        ...prev,
        { type: "bot", content: "API key set successfully! You can now chat with the AI-powered assistant." }
      ]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md flex flex-col h-[32rem] animate-fadeIn overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircle className="mr-2" />
            <h3 className="font-semibold">SoftSell Support</h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-white hover:bg-blue-700 rounded-full p-1"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Chat messages */}
        <div className="flex-grow overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`rounded-lg py-2 px-4 max-w-[80%] ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-gray-100 dark:bg-gray-700 rounded-bl-none'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg py-2 px-4 rounded-bl-none">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* API Key input (if not set) */}
        {!hasApiKey && (
          <div className="bg-blue-50 dark:bg-blue-900/30 p-3 border-t border-blue-100 dark:border-blue-800">
            <form onSubmit={handleApiKeySubmit} className="flex">
              <input
                type="password"
                placeholder="Enter OpenAI API key (optional)"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded-l text-sm bg-white dark:bg-gray-700"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-3 rounded-r hover:bg-blue-700"
              >
                Set
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Without API key, only predefined answers available
            </p>
          </div>
        )}
        
        {/* Input area */}
        <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-4 flex">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className={`bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 flex items-center justify-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;