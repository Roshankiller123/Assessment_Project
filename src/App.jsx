import React from "react";
import { SessionProvider } from "./contexts/SessionContext";
import ModelSelector from "./components/ModelSelector";
import ParametersPanel from "./components/ParametersPanel";
import PromptEditor from "./components/PromptEditor";
import ChatOutput from "./components/ChatOutput";
import ThemeToggle from "./components/ThemeToggle";

function AppInner() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-6 transition-colors duration-500">
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
          AI Interface — Prototype
        </h1>
        <ThemeToggle />
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 space-y-4 p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg shadow-xl border border-slate-200 dark:border-slate-700 transition">
          <ModelSelector />
          <ParametersPanel />
        </aside>

        <section className="md:col-span-3 space-y-4 p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg shadow-xl border border-slate-200 dark:border-slate-700 transition">
          <PromptEditor />
          <ChatOutput />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <SessionProvider>
      <AppInner />
    </SessionProvider>
  );
}

export default App;
