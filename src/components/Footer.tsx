'use client'

import {FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import {motion} from "framer-motion";
import DarkModeToggler from "@/components/DarkModeToggler";
import { Toaster } from "@/components/ui/sonner"

const linkAnimation = {
    scale: [1, 1.1, 1],
    rotate: [0, 10, -10, 0],
    transition: {
        duration: 0.5,
    }
}

export default function Footer(){
  return (
      <div
          className="relative bottom-0 flex justify-center text-5xl">
        <Toaster position="bottom-left"/>
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="relative bottom-0 flex justify-between gap-3 p-5 text-5xl">
          <motion.div whileHover={linkAnimation}>
            <Link
                href={"https://github.com/pilif139"} target="_blank"
                className="transition duration-500 hover:text-gray-500">
              <FaGithub/>
            </Link>
          </motion.div>
          <motion.div whileHover={linkAnimation}>
            <Link href={"https://www.linkedin.com/in/filip-kasperski-b80a8b310/"} target="_blank"
                  className="transition duration-500 hover:text-gray-500">
              <FaLinkedin/>
            </Link>
          </motion.div>
        </motion.div>
        <div className="text-xl">
          <DarkModeToggler/>
        </div>
      </div>
  )
}