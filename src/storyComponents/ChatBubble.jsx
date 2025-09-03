import React from "react";
import "./ChatBubble.css";

export default function ChatBubble({ text, sender = "ai" }) {
  const bubbleClass = sender === "ai" ? "chat-bubble ai" : "chat-bubble user";

  return (
    <div className={bubbleClass}>
      <div className="bubble-text">{text}</div>
    </div>
  );
}
