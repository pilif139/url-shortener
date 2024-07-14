"use client"

import Link from "next/link";
import {motion} from "framer-motion";

export default function Header() {

  const handleClick = () =>{
    if(window.location.pathname === "/") {
      window.location.reload();
    }
  }

  return (
      <motion.header
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="flex w-full justify-center md:p-10"
      >
        <Link href={"/"} onClick={handleClick}>
          <h1 className="rounded-full p-5 text-5xl transition duration-500 hover:bg-slate-300 md:text-6xl dark:hover:bg-slate-700">
            <span className="text-violet-500 transition hover:text-violet-700 dark:hover:text-violet-400">URL</span>
            &nbsp;Shortener
          </h1>
        </Link>
      </motion.header>
  );
}