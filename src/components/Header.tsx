"use client"

import Link from "next/link";
import {motion} from "framer-motion";

export default function Header() {
  return (
      <motion.header
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="absolute top-0 w-full flex justify-center md:p-10">
        <Link href={"/"}>
          <h1 className="md:text-6xl text-5xl hover:bg-slate-300 transition p-5 rounded-full">
            <span className="text-violet-500 hover:text-violet-800 transition">URL</span>
            &nbsp;Shortener
          </h1>
        </Link>
      </motion.header>
  );
}