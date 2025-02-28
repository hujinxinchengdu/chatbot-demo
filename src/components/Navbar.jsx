import React from "react";

export default function Navbar({ onSearch }) {
  const handleInputChange = (e) => {
    onSearch?.(e.target.value);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2 bg-white">
      {/* Left logo area: circular checkmark SVG + "ChatBot" text */}
      <div className="flex items-center space-x-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2563eb" // Using stroke to render the lines
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer outline: two triangles on top and bottom + connecting middle line to create a 3D effect */}
          <path d="M21 16l-9 5-9-5V8l9-5 9 5v8z" />
          {/* Top horizontal surface */}
          <path d="M3.27 6.96l8.73 4.87 8.73-4.87" />
          {/* Vertical center line */}
          <path d="M12 22v-10" />
        </svg>

        {/* 2. "ChatBot" text, with the same color as the circular icon above */}
        <span className="text-xl font-semibold text-blue-600 font-serif">
          ChatBot
        </span>
      </div>

      {/* Right search box area */}
      <div className="relative">
        {/* Magnifying glass icon: positioned absolutely on the left side of the input field */}
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 2a8 8 0 105.29 14.02l4.35 4.35a1 1 0 001.42-1.42l-4.35-4.35A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
        </svg>

        {/* Input field: add left padding to prevent text from overlapping with the icon */}
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
