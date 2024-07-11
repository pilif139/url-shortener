'use client'

import {FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import {motion} from "framer-motion";

export default function Footer(){
  return (
      <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="flex justify-center relative bottom-0 text-5xl p-5 gap-3">
        <Link href={"https://github.com/pilif139"} target="_blank" className="hover:text-gray-500 transition duration-500">
          <FaGithub/>
        </Link>
        <Link href={"https://www.linkedin.com/in/filip-kasperski-b80a8b310/"} target="_blank" className="hover:text-gray-500 transition duration-500">
          <FaLinkedin />
        </Link>
      </motion.div>
  )
}