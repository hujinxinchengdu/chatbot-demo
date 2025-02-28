import React, { useState } from "react";

export default function Navbar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value); // 将搜索关键字回传父组件
  };

  return (
    <nav className="w-full flex items-center justify-between bg-blue-500 px-4 py-3 text-white">
      <div className="font-bold text-xl">
        {/* Logo 占位 */}
        ChatBot
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
          className="p-2 rounded text-black"
        />
      </div>
    </nav>
  );
}
