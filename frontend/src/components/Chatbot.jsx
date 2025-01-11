import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaRobot, FaTrashAlt } from "react-icons/fa";
import "./Chatbot.css"; // Add a custom CSS file for additional styles

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Load messages from localStorage when the component mounts
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(savedMessages);
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, userMessage]);

    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        text: "This is a simulated response. How can I assist further?",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 text-gray-900 flex flex-col">
      {/* Page Header */}
      <header className="w-full bg-gradient-to-r from-gray-800 via-orange-900 to-gray-800 text-white text-center py-16 shadow-md">
        <h1 className="text-4xl font-extrabold mb-4 mt-16">
          AI Chat Assistant
        </h1>
        <p className="text-lg max-w-3xl mx-auto px-4">
          Get instant support and answers to your queries powered by advanced AI.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center py-12 px-4 space-y-12">
        {/* Introduction Section */}
        <section className="text-center max-w-2xl">
          <div className="text-3xl font-semibold flex items-center justify-center space-x-4">
            <FaRobot className="text-gray-800 text-5xl" />
            <span>How Can I Help You Today?</span>
          </div>
          <p className="mt-4 text-gray-700 text-lg">
            Whether you have questions, need technical assistance, or are just
            looking for guidance, type your message below to get started.
          </p>
        </section>

        {/* Chat Container */}
        <section className="chat-container bg-gradient-to-r from-gray-300 to-orange-100 shadow-lg rounded-lg w-full max-w-3xl flex flex-col h-[70vh]">
          {/* Chat Window */}
          <div className="flex-grow p-6 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`relative flex items-center space-x-4 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-3 max-w-xs text-sm rounded-lg font-semibold shadow-md border ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white border-blue-800"
                      : "bg-orange-200 text-gray-900 border-orange-400"
                  }`}
                >
                  {message.text}
                  <span className="block text-xs text-gray-600 mt-1">
                    {message.time}
                  </span>
                </div>
                <button
                  className="text-gray-600 hover:text-red-500 transition"
                  onClick={() => handleDeleteMessage(index)}
                >
                  <FaTrashAlt size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="p-4 bg-gray-100 rounded-b-lg shadow-inner flex items-center space-x-4">
            <input
              type="text"
              className="flex-grow px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-700 transition duration-300"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSend}
              className="bg-gray-800 text-white p-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Chatbot;
