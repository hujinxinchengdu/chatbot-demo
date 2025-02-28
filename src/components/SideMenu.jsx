import React, { useState } from "react";

export default function SideMenu({ currentPage, setCurrentPage }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // 根据状态设置侧边栏宽度：展开时为15rem（w-60），收起时为4rem（w-16）
  const sideMenuWidth = isCollapsed ? "4rem" : "15rem";

  // 箭头按钮样式：left 定位使用侧边栏宽度，然后平移自身一半，实现一半被侧边栏覆盖
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
    <div className="relative h-screen">
      {/* 侧边栏容器：绝对定位于页面左上角，z-20 确保在按钮之上 */}
      <div
        className="absolute top-0 left-0 h-full transition-all duration-300 z-20 bg-gray-50"
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
              {/* 展开时显示文字，收起时仅显示图标 */}
              {!isCollapsed && (
                <span className="ml-2 text-sm font-medium">{item.label}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* 箭头按钮：绝对定位于侧边栏右侧边缘，其一半被侧边栏遮盖 */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={arrowButtonStyle}
        className="absolute z-10 w-8 h-8 bg-blue-600 text-white rounded-md cursor-pointer flex items-center justify-center shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {isCollapsed ? (
          // 收起状态下显示向右箭头（提示点击展开）
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
          // 展开状态下显示向左箭头（提示点击收起）
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
