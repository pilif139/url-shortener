'use client'

import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import {motion} from "framer-motion";

export default function AuthComponent(){
  return (
      <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          className="top-0 right-0 flex w-full justify-center bg-slate-300 px-10 py-3 text-2xl font-bold text-black transition hover:text-gray-600 dark:bg-slate-600 dark:text-white md:absolute md:w-fit md:bg-transparent dark:hover:text-gray-200 dark:md:bg-transparent">
        <Link href={"/login"} className="flex items-center">Log In<CiLogin /></Link>
      </motion.div>
  )
}