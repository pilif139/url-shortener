'use client'

import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import {motion} from "framer-motion";

export default function AuthComponent(){
  return (
      <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          className="md:absolute top-0 right-0 text-black hover:text-gray-600 dark:hover:text-gray-200 transition text-2xl  py-3 px-10 font-bold bg-slate-300 dark:bg-slate-600 dark:text-white w-full flex justify-center md:bg-transparent dark:md:bg-transparent md:w-fit">
        <Link href={"/login"} className="flex items-center">Log In<CiLogin /></Link>
      </motion.div>
  )
}