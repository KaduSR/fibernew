"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function FloatingButton() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`
          rounded-full p-3 shadow-lg
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white
          transition-colors flex items-center justify-center
          ${
            isDark
              ? `bg-white text-black` // tema escuro: botão preto, ícone branco
              : `bg-black text-white`
          }   // tema claro: botão branco, ícone preto
        `}
        aria-label="Alternar tema"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
    </div>
  );
}

export default FloatingButton;
