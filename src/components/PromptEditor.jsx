import React, { useEffect, useRef, useState } from "react";
import { useSession } from "../contexts/SessionContext";

export default function PromptEditor() {
  const { templates, template, addChat } = useSession();
  const [text, setText] = useState("");
  const savedTemplatesKey = "localTemplates";
  const ref = useRef();

  useEffect(() => {
    const t = templates.find((x) => x.id === template);
    if (t) setText(t.prompt + "\n\n");
  }, [template, templates]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    const entry = {
      id: Date.now(),
      prompt: text,
      response: "Mocked response — frontend-only demo.",
      meta: { createdAt: new Date().toISOString() },
    };
    addChat(entry);
    setText("");
    ref.current?.focus();
  }

  function handleSaveTemplate() {
    const title = prompt("Template name (short):");
    if (!title) return;
    const newT = { id: "t-" + Date.now(), title, prompt: text };
    const saved = JSON.parse(localStorage.getItem(savedTemplatesKey) || "[]");
    saved.unshift(newT);
    localStorage.setItem(savedTemplatesKey, JSON.stringify(saved));
    alert("Saved locally");
  }

  const savedTemplates = JSON.parse(
    localStorage.getItem(savedTemplatesKey) || "[]"
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-3">
        <div className="flex-1">
          <label className="text-sm font-medium">Prompt</label>
          <textarea
            ref={ref}
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={8}
            className="w-full p-3 text-black border rounded resize-vertical mt-1"
            placeholder="Write your prompt..."
            aria-label="Prompt editor"
          />
          <div className="flex gap-2 mt-2">
            <button
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg 
             font-semibold text-white overflow-hidden shadow-md group"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 
               transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <span className="relative z-10 flex items-center gap-1">
                🚀 Run
              </span>
            </button>

            <button
              onClick={handleSaveTemplate}
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg 
             font-semibold text-white overflow-hidden shadow-md group"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 
               transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <span className="relative z-10 flex items-center gap-1">
                💾 Save Template
              </span>
            </button>
          </div>
        </div>

        <div className="w-48">
          <div className="text-xs text-gray-600 mb-1">Load saved</div>
          <select
            onChange={(e) => setText(JSON.parse(e.target.value).prompt)}
            className="w-full text-black p-2 border rounded"
          >
            <option value="">— select —</option>
            {savedTemplates.map((t) => (
              <option key={t.id} value={JSON.stringify(t)}>
                {t.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
}
