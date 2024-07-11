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
          className="flex absolute bottom-0 text-5xl p-5 gap-3">
        <Link href={"https://github.com/pilif139"} target="_blank">
          <FaGithub/>
        </Link>
        <Link href={"https://www.linkedin.com/in/filip-kasperski-b80a8b310/"} target="_blank">
          <FaLinkedin />
        </Link>
      </motion.div>
  )
}