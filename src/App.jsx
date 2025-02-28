import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import AppsPage from "./AppsPage";
import DocumentsPage from "./DocumentsPage";
import ChatbotWidget from "./ChatbotWidget";

function App() {
  const [currentPage, setCurrentPage] = useState("apps");
  const [searchText, setSearchText] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航条 */}
      <Navbar onSearch={(value) => setSearchText(value)} />

      {/* 主体区域：左侧菜单 + 右侧内容 */}
      <div className="flex flex-1">
        <SideMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* 根据 currentPage 切换组件 */}
        <div className="flex-1 overflow-y-auto">
          {currentPage === "apps" ? (
            <AppsPage searchText={searchText} />
          ) : (
            <DocumentsPage searchText={searchText} />
          )}
        </div>
      </div>

      {/* 悬浮Chatbot组件 */}
      <ChatbotWidget />
    </div>
  );
}

export default App;
