import React from "react";
import { SessionProvider } from "./contexts/SessionContext";
import ModelSelector from "./components/ModelSelector";
import ParametersPanel from "./components/ParametersPanel";
import PromptEditor from "./components/PromptEditor";
import ChatOutput from "./components/ChatOutput";
import ThemeToggle from "./components/ThemeToggle";
import { motion } from "framer-motion";

function AppInner() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-6 transition-colors duration-500">
      {/* Header animation */}
      <motion.header
        className="max-w-6xl mx-auto flex items-center justify-between mb-6"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          AI Interface — Prototype
        </motion.h1>
        <ThemeToggle />
      </motion.header>

      {/* Main layout*/}
      <motion.main
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Sidebar */}
        <motion.aside
          className="md:col-span-1 space-y-4 p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg shadow-xl border border-slate-200 dark:border-slate-700 transition"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ModelSelector />
          <ParametersPanel />
        </motion.aside>

        {/* Main section */}
        <motion.section
          className="md:col-span-3 space-y-4 p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg shadow-xl border border-slate-200 dark:border-slate-700 transition"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <PromptEditor />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ChatOutput />
          </motion.div>
        </motion.section>
      </motion.main>
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
