'use client'

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import useTheme from "@/hooks/useTheme";

type Theme = 'light' | 'dark';

function DarkModeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="absolute right-7 bottom-7 rounded-3xl bg-indigo-500 p-5 text-white transition-colors scale-[1.12] dark:bg-gray-900"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default DarkModeToggler;