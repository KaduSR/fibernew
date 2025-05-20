"use client";

import { useTheme } from "next-themes"; // ou outro hook para tema
import { Sun, Moon } from "lucide-react";

export function FloatingButton() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="
          rounded-full
          p-3
          bg-white/90 dark:bg-black/80
          shadow-lg hover:shadow-xl
          transition-shadow
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white
          flex items-center justify-center
        "
        aria-label="Alternar tema"
      >
        {isDark
          ? <Sun className="h-5 w-5 text-yellow-400" />
          : <Moon className="h-5 w-5 text-gray-600" />
        }
      </button>
    </div>
  );
}

export default FloatingButton;