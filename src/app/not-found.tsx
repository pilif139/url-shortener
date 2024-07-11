'use client'

import Link from "next/link";
import {motion} from "framer-motion";

export default function NotFound(){
  return (
      <motion.div
          initial={{opacity: 0, scale: 0.90}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="text-2xl flex flex-col items-center justify-center min-h-[85vh]">
        <h1>Page not found 404.</h1>
        <Link href={"/"} className="text-violet-500 font-bold text-3xl bg-slate-300 p-3 my-5 rounded-3xl hover:text-violet-600 hover:bg-slate-400 transition">Return to home page.</Link>
      </motion.div>
  )
}