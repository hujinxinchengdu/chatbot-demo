import React from "react";

export default function SideMenu({ currentPage, setCurrentPage }) {
  const menuItems = [
    {
      key: "apps",
      label: "Apps",
      icon: (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3h3v3H4V3zm5 0h3v3H9V3zm5 0h3v3h-3V3zM4 8h3v3H4V8zm5 0h3v3H9V8zm5 0h3v3h-3V8zM4 13h3v3H4v-3zm5 0h3v3H9v-3zm5 0h3v3h-3v-3z" />
        </svg>
      ),
    },
    {
      key: "documents",
      label: "Documents",
      icon: (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 00-1 1v2H4a1 1 0 00-1 1v10c0 .55.45 1 1 1h12a1 1 0 001-1V6.414A2 2 0 0015.586 5L13 2.414A2 2 0 0011.586 2H10V2zm3 3.414L14.586 6H12V3.414zM5 8h10v2H5V8zm0 4h10v2H5v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 w-60 h-screen">
      {menuItems.map((item) => {
        const isActive = currentPage === item.key;
        const activeClasses = isActive
          ? "!bg-blue-700 text-white rounded-none"
          : "bg-white text-gray-700 hover:bg-gray-100 rounded-none";
        return (
          <div
            role="button"
            key={item.key}
            onClick={() => setCurrentPage(item.key)}
            className={`flex items-center w-full text-left px-4 py-3 transition-colors ${activeClasses} focus:ring-0 focus:outline-none cursor-pointer`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
