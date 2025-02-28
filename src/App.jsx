import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import AppsPage from "./pages/AppsPage";
import DocumentsPage from "./pages/DocumentsPage";
import ChatbotWidget from "./components/ChatbotWidget";

function App() {
  const [currentPage, setCurrentPage] = useState("apps");
  const [searchText, setSearchText] = useState("");

  return (
    /**
     * w-screen h-screen: 让整个应用填满浏览器视窗（无空隙）
     * flex flex-col: 纵向排列（Navbar 在上，中间区域填充剩余空间）
     * overflow-hidden: 避免外部出现滚动条
     */
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      {/* 1. 顶部导航，默认占据整行 */}
      <Navbar onSearch={(value) => setSearchText(value)} />

      {/* 2. 主体区域（侧边栏 + 内容区） */}
      <div className="flex flex-1 overflow-hidden">
        {/* 侧边栏，占固定宽度 */}
        <SideMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* 主要内容区，撑满剩余空间，并允许滚动 */}
        <div className="flex-1 overflow-auto">
          {currentPage === "apps" ? (
            <AppsPage searchText={searchText} />
          ) : (
            <DocumentsPage searchText={searchText} />
          )}
        </div>
      </div>

      {/* 3. 悬浮聊天机器人（可选） */}
      <ChatbotWidget />
    </div>
  );
}

export default App;
