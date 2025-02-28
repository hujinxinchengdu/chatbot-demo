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
     * w-screen h-screen: makes the entire application fill the browser viewport (no gaps)
     * flex flex-col: arrange vertically (Navbar on top, middle area fills remaining space)
     * overflow-hidden: prevents external scrollbars
     */
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      {/* 1. Top navigation bar, occupies entire row by default */}
      <Navbar onSearch={(value) => setSearchText(value)} />

      {/* 2. Main area (sidebar + content area) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: uses dynamic width inside SideMenu */}
        <SideMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Main content area */}
        <div className="flex flex-1 overflow-auto">
          {currentPage === "apps" ? (
            <AppsPage searchText={searchText} />
          ) : (
            <DocumentsPage searchText={searchText} />
          )}
        </div>
      </div>

      {/* 3. Floating chatbot (optional) */}
      <ChatbotWidget />
    </div>
  );
}

export default App;
