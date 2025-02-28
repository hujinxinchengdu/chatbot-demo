import React, { useState, useEffect, useRef } from "react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  // 打开关闭时，重置计时器
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

  // 组件卸载时清除定时器
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // 发送消息
  const handleSend = () => {
    if (!userInput.trim()) return;
    const newMsg = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, newMsg]);
    setUserInput("");

    // 模拟机器人回复
    setTimeout(() => {
      const botResponse = {
        sender: "bot",
        text: "这是一个自动回复，谢谢分享你的信息！",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  if (!isOpen) {
    // 右下角的悬浮按钮
    return (
      <button
        onClick={handleOpen}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center"
      >
        Chat
      </button>
    );
  }

  // 聊天窗口
  return (
    <div
      className="fixed bottom-4 right-4 bg-white border shadow-md flex flex-col"
      style={{
        width: "400px",
        height: "600px",
        // 在移动端可用媒体查询使其占满全屏
      }}
    >
      {/* Header: 计时器 + Reset & Close */}
      <div className="flex justify-between items-center bg-blue-500 text-white p-3">
        <span>{elapsedTime}s</span>
        <div>
          <button onClick={handleReset} className="mr-2">
            Reset
          </button>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>

      {/* 消息显示区 */}
      <div className="flex-1 overflow-y-auto p-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded px-3 py-2 max-w-xs ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* 输入区 */}
      <div className="p-3 border-t flex">
        <input
          type="text"
          className="flex-1 border rounded mr-2 p-2"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
