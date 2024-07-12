'use client'

import {motion} from "framer-motion";

export default function Login(){
  return (
      <form className="flex flex-col gap-1 text-lg">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" required placeholder="username..."/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required placeholder="email..."/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required placeholder="password..."/>
        <motion.button
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.4, type: "tween", stiffness: 500, damping: 20}}
            type="submit"
            className="mt-4 w-max self-center rounded-2xl bg-violet-500 p-2 px-8 text-xl text-white transition hover:bg-violet-600">Submit
        </motion.button>
      </form>
  )
}