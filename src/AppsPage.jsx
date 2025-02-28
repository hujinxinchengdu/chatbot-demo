import React from "react";

export default function AppsPage({ searchText }) {
  // 多段内容
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ...",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ...",
    // ... 其他段落
  ];

  // 简单写法: 只展示含搜索字符串的段落
  const filteredParagraphs = paragraphs.filter((p) =>
    p.toLowerCase().includes(searchText.toLowerCase())
  );

  // 高亮函数，用 <mark> 包裹匹配文字
  const highlightText = (text, query) => {
    if (!query) return text; // 没有搜索词就直接返回
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  };

  return (
    <div className="p-4">
      {filteredParagraphs.map((para, index) => {
        // 使用 dangerouslySetInnerHTML 以便插入 <mark>（实际项目需注意安全/转义）
        const highlighted = highlightText(para, searchText);
        return (
          <p
            key={index}
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        );
      })}
    </div>
  );
}
