import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChatbotWidget from "./ChatbotWidget";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* 顶部导航条 */}
        <Navbar onSearch={(value) => setSearchText(value)} />

        <h1>123</h1>
        {/* Chatbot Dialog Button */}
        <ChatbotWidget />
      </div>
    </>
  );
}

export default App;
