'use client'

import Link from "next/link";
import {motion} from "framer-motion";

export default function NotFound(){
  return (
      <motion.div
          initial={{opacity: 0, scale: 0.90}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="flex flex-col items-center justify-center text-2xl min-h-[85vh]">
        <h1>Page not found 404.</h1>
        <Link href={"/"} className="my-5 rounded-3xl bg-slate-300 p-3 text-3xl font-bold text-violet-500 transition hover:bg-slate-400 hover:text-violet-600">Return to home page.</Link>
      </motion.div>
  )
}