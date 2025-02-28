import React, { useState } from "react";

export default function SideMenu({ currentPage, setCurrentPage }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Set sidebar width according to state: expanded is 15rem (w-60), collapsed is 4rem (w-16)
  const sideMenuWidth = isCollapsed ? "4rem" : "15rem";

  // Arrow button style: left positioning uses sidebar width, then shift by a portion so that half is covered by the sidebar
  const arrowButtonStyle = {
    left: sideMenuWidth,
    top: "40%",
    transform: "translate(-35%, -50%)",
  };

  const menuItems = [
    {
      key: "apps",
      label: "Apps",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3h3v3H4V3zm5 0h3v3H9V3zm5 0h3v3h-3V3zM4 8h3v3H4V8zm5 0h3v3H9V8zm5 0h3v3h-3V8zM4 13h3v3H4v-3zm5 0h3v3H9v-3zm5 0h3v3h-3v-3z" />
        </svg>
      ),
    },
    {
      key: "documents",
      label: "Documents",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 00-1 1v2H4a1 1 0 00-1 1v10c0 .55.45 1 1 1h12a1 1 0 001-1V6.414A2 2 0 0015.586 5L13 2.414A2 2 0 0011.586 2H10V2zm3 3.414L14.586 6H12V3.414zM5 8h10v2H5V8zm0 4h10v2H5v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="relative h-screen transition-all duration-300 z-20 bg-gray-50"
      style={{ width: sideMenuWidth }}
    >
      {menuItems.map((item) => {
        const isActive = currentPage === item.key;
        const activeClasses = isActive
          ? "!bg-blue-700 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100";
        return (
          <div
            key={item.key}
            role="button"
            onClick={() => setCurrentPage(item.key)}
            className={`flex items-center px-4 py-3 transition-colors cursor-pointer focus:outline-none ${activeClasses}`}
          >
            {item.icon}
            {/* Show text when expanded, display only icon when collapsed */}
            {!isCollapsed && (
              <span className="ml-2 text-sm font-medium">{item.label}</span>
            )}
          </div>
        );
      })}

      {/* Arrow button: absolutely positioned on the right edge of the sidebar, half covered by the sidebar */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={arrowButtonStyle}
        className="absolute z-10 w-8 h-8 bg-blue-600 text-white rounded-md cursor-pointer flex items-center justify-center shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {isCollapsed ? (
          // When collapsed, display right arrow (indicating click to expand)
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        ) : (
          // When expanded, display left arrow (indicating click to collapse)
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        )}
      </div>
    </div>
  );
}
