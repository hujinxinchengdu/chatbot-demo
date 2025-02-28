// ChatbotWidget.jsx
import React, { useState, useEffect, useRef } from "react";
import ChatButton from "./ChatButton";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  // Reset timer when opening
  const handleOpen = () => {
    setIsOpen(true);
    setElapsedTime(0);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    setElapsedTime(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setMessages([]);
    setElapsedTime(0);
  };

  // Clear timer when component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Send message
  const handleSend = () => {
    if (!userInput.trim()) return;
    const newMsg = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, newMsg]);
    setUserInput("");

    // Simple simulated bot reply
    setTimeout(() => {
      const botResponse = {
        sender: "bot",
        text: "That's interesting, tell me more.",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  return (
    <>
      {/* Floating button always visible */}
      <ChatButton onClick={isOpen ? handleClose : handleOpen} />

      {/* Chat window, positioned above the button */}
      {isOpen && (
        <div
          className="fixed z-50 bg-white border shadow-md flex flex-col
            w-full h-full bottom-0 right-0 
            sm:w-[400px] sm:h-[600px] sm:bottom-[120px] sm:right-4"
        >
          {/* Header: Timer + Reset & Close */}
          <div className="flex justify-between items-center bg-blue-700 text-white px-4 py-2">
            <span>{elapsedTime}</span>
            <div className="flex space-x-2">
              <div
                role="button"
                tabIndex={0}
                onClick={handleReset}
                onKeyDown={(e) =>
                  e.key === "Enter" || e.key === " " ? handleReset() : null
                }
                className="px-4 py-1 border border-white text-white rounded-md cursor-pointer focus:outline-none"
              >
                Reset
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={handleClose}
                onKeyDown={(e) =>
                  e.key === "Enter" || e.key === " " ? handleClose() : null
                }
                className="px-4 py-1 border border-white text-white rounded-md cursor-pointer focus:outline-none"
              >
                Close
              </div>
            </div>
          </div>

          {/* Message display area */}
          <div className="flex-1 overflow-y-auto p-4 bg-white">
            {messages.map((msg, index) => {
              const isUser = msg.sender === "user";
              return (
                <div
                  key={index}
                  className={`flex w-full mb-3 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      relative px-4 py-2 
                      rounded-lg
                      max-w-sm
                      ${
                        isUser
                          ? "bg-blue-700 text-white"
                          : "bg-gray-200 text-black"
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input area */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              className="flex-1 border rounded-sm p-2 mr-2 focus:outline-none"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />
            <div
              role="button"
              tabIndex={0}
              onClick={handleSend}
              className="px-4 py-1 border bg-blue-700 border-white text-white rounded-md cursor-pointer focus:outline-none"
            >
              Send
            </div>
          </div>
        </div>
      )}
    </>
  );
}
