import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  return (
    <button
      onClick={toggle}
      className="relative flex items-center justify-between w-16 h-8 rounded-full bg-slate-300 dark:bg-slate-700 p-1 transition-colors duration-300"
    >
      <SunIcon
        className={`h-5 w-5 text-yellow-500 transition-opacity ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <MoonIcon
        className={`h-5 w-5 text-indigo-400 transition-opacity ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      />
    </button>
  );
}
