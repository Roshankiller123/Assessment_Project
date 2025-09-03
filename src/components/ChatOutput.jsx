import React from "react";
import { useSession } from "../contexts/SessionContext";

export default function ChatOutput() {
  const { chat } = useSession();

  function handleCopy(text) {
    navigator.clipboard.writeText(text).then(() => alert("Copied"));
  }

  function handleDownload(item) {
    const blob = new Blob([JSON.stringify(item, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chat-${item.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!chat.length)
    return <div className="p-3 text-gray-600">No outputs yet.</div>;

  return (
    <div className="space-y-4">
      {chat.map((c) => (
        <div key={c.id} className="p-3 border rounded">
          <div className="mb-2 text-xs text-gray-500">
            {new Date(c.meta.createdAt).toLocaleString()}
          </div>
          <div className="mb-2">
            <strong>Prompt</strong>
            <div className="whitespace-pre-wrap">{c.prompt}</div>
          </div>
          <div className="mb-2">
            <strong>Response</strong>
            <div className="whitespace-pre-wrap">{c.response}</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleCopy(c.response)}
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg 
             font-semibold text-white overflow-hidden shadow-md group"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 
               transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <span className="relative z-10 flex items-center gap-1">
                🗐 Copy
              </span>
            </button>
            <button
              onClick={() => handleDownload(c)}
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg 
             font-semibold text-white overflow-hidden shadow-md group"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 
               transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <span className="relative z-10 flex items-center gap-1">
                📥 Download JSON
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
