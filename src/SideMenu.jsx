import React from "react";

export default function SideMenu({ currentPage, setCurrentPage }) {
  return (
    <div className="flex flex-col bg-gray-100 h-full w-48 p-4">
      <button
        onClick={() => setCurrentPage("apps")}
        className={`mb-2 text-left p-2 rounded ${
          currentPage === "apps" ? "bg-blue-200" : ""
        }`}
      >
        Apps
      </button>

      <button
        onClick={() => setCurrentPage("documents")}
        className={`mb-2 text-left p-2 rounded ${
          currentPage === "documents" ? "bg-blue-200" : ""
        }`}
      >
        Documents
      </button>
    </div>
  );
}
