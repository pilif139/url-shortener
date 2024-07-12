'use client'

import {motion} from "framer-motion";

export default function Login(){
  return (
      <div className="flex flex-col items-center gap-10">
            <h1 className="text-4xl">Login</h1>
            <form className="flex flex-col text-lg gap-1">
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
                  className="bg-violet-500 p-2 px-8 mt-4 rounded-2xl self-center text-white w-max hover:bg-violet-600 transition text-xl">Submit
              </motion.button>
            </form>
      </div>
  )
}