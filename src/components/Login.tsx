'use client'

import {motion} from "framer-motion";
import Link from "next/link";

export default function Login(){
  return (
      <div className="flex flex-col items-center gap-10 px-10">
        <h1 className="text-4xl">Log In</h1>
        <form className="flex flex-col gap-1 text-lg">
          <label htmlFor="email">Email</label>
          <input type="email"
                 id="email"
                 name="email"
                 required
                 placeholder="email..."
                 className="w-[15em] p-2 rounded-xl outline-none focus:bg-slate-200 transition text-black"
          />
          <label htmlFor="password">Password</label>
          <input type="password"
                 id="password"
                 name="password"
                 required
                 placeholder="password..."
                 className="w-[15em] p-2 rounded-xl outline-none focus:bg-slate-200 transition text-black"
          />
          <motion.button
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.4, type: "tween", stiffness: 500, damping: 20}}
              type="submit"
              className="mt-4 w-max self-center rounded-2xl bg-violet-500 p-2 px-8 text-xl text-white transition hover:bg-violet-600">Submit
          </motion.button>
          <p className="mt-3 text-xl">
            Don&apos;t have account? <Link href={"/register"} className="text-violet-500">Register</Link>
          </p>
        </form>
      </div>
  )
}