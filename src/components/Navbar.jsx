import React from "react";

export default function Navbar({ onSearch }) {
  const handleInputChange = (e) => {
    onSearch?.(e.target.value);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2 bg-white">
      {/* 左侧 Logo 区域：圆形带勾 SVG + “ChatBot” 文字 */}
      <div className="flex items-center space-x-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2563eb" // 用 stroke 呈现线条
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 外轮廓：上下两个三角面 + 中间连线，呈现3D效果 */}
          <path d="M21 16l-9 5-9-5V8l9-5 9 5v8z" />
          {/* 顶部水平面 */}
          <path d="M3.27 6.96l8.73 4.87 8.73-4.87" />
          {/* 垂直中心线 */}
          <path d="M12 22v-10" />
        </svg>

        {/* 2. “ChatBot” 文本，颜色与上方圆形一致 */}
        <span className="text-xl font-semibold text-blue-600 font-serif">
          ChatBot
        </span>
      </div>

      {/* 右侧搜索框区域 */}
      <div className="relative">
        {/* 放大镜图标：使用绝对定位放入输入框左侧 */}
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 2a8 8 0 105.29 14.02l4.35 4.35a1 1 0 001.42-1.42l-4.35-4.35A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
        </svg>

        {/* 输入框：设置左侧内边距以避免文字覆盖图标 */}
        <input
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          className="
            pl-9 pr-4 py-2
            rounded-full border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          "
          style={{ minWidth: "200px" }}
        />
      </div>
    </nav>
  );
}
