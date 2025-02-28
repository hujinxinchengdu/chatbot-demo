import React from "react";

export default function ChatButton({ onClick }) {
  return (
    <div
      role="button"
      onClick={onClick}
      className="fixed bottom-4 right-4 z-10 cursor-pointer"
      aria-label="Open Chatbot"
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="40" fill="#1D4ED8" />

        <path
          fill="#FFFFFF"
          d="M20 40 A15 15 0 0 1 35 30 H 45 A15 15 0 0 1 60 40 V 45 A15 15 0 0 1 45 55 H 35 A15 15 0 0 1 20 45 Z"
        />
        <path fill="#FFFFFF" d="M30 50 L25 58 Q28 56 30 55 Z" />

        <circle cx="32" cy="40" r="2" fill="#1D4ED8" />
        <circle cx="40" cy="40" r="2" fill="#1D4ED8" />
        <circle cx="48" cy="40" r="2" fill="#1D4ED8" />
      </svg>
    </div>
  );
}
