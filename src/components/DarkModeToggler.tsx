'use client'

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import {useEffect, useState} from "react";

type Theme = 'light' | 'dark';

function DarkModeToggler() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if(theme==="light"){
      setTheme("dark");
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    else{
      setTheme("light");
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if(localTheme){
      setTheme(localTheme);
      if(localTheme === 'dark'){
        document.documentElement.classList.add('dark');
      }
    }
    else if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  },[])

  return (
      <button className="transition-colors dark:bg-gray-900 bg-indigo-500 text-white p-5 rounded-3xl absolute bottom-7 right-7 scale-[1.12]"
              onClick={toggleTheme}
      >
        {theme === 'dark' ? <FaMoon/> : <FaSun />}
      </button>
  );
}

export default DarkModeToggler;