import React from "react";

export default function DocumentsPage({ searchText }) {
  // 多段文档示例内容
  const paragraphs = [
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  ];

  // 筛选：只展示包含搜索关键字的段落
  const filteredParagraphs = paragraphs.filter((p) =>
    p.toLowerCase().includes(searchText.toLowerCase())
  );

  // 高亮函数，用 <mark> 包裹匹配文字
  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  return (
    <div className="p-4">
      {filteredParagraphs.map((para, index) => {
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
