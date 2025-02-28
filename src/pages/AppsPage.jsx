import React from "react";

export default function AppsPage({ searchText }) {
  // Multi-paragraph content
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ...",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ...",
    // ... other paragraphs
  ];

  // Simple approach: only display paragraphs containing the search string
  const filteredParagraphs = paragraphs.filter((p) =>
    p.toLowerCase().includes(searchText.toLowerCase())
  );

  // Highlight function, wraps matching text with <mark>
  const highlightText = (text, query) => {
    if (!query) return text; // If there's no search term, return the text directly
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  };

  return (
    <div className="p-4">
      {filteredParagraphs.map((para, index) => {
        // Using dangerouslySetInnerHTML to insert <mark> (in real projects, be cautious about security/escaping)
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
