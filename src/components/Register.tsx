'use client'

import {motion} from "framer-motion";
import Link from "next/link";
import {useFormState, useFormStatus} from "react-dom";
import {register} from "@/actions/register";
import {RiseLoader} from "react-spinners";

export default function Register(){
  const [state, action] = useFormState(register, undefined)

  return (
      <div className="flex flex-col items-center gap-10 px-10">
        <h1 className="text-4xl">Sign Up</h1>
        <form action={action}
              className="flex flex-col gap-1 text-xl w-[28em]">
          <label htmlFor="username">Username</label>
          <input type="text"
                 id="username"
                 name="username"
                 required
                 placeholder="username..."
                 className="w-full p-2 rounded-xl outline-none dark:focus:bg-slate-200 focus:bg-slate-100 transition text-black"
          />
          {state?.errors?.username && state.errors.username.map((error: string, id) => (
              <li key={id} className="text-red-500">{error}</li>))}
          <label htmlFor="email">Email</label>
          <input type="email"
                 id="email"
                 name="email"
                 required
                 placeholder="email..."
                 className="w-full p-2 rounded-xl outline-none dark:focus:bg-slate-200 focus:bg-slate-100 transition text-black"
          />
          {state?.errors?.email && state.errors.email.map((error: string, id) => (
              <li key={id} className="text-red-500">{error}</li>))}
          <label htmlFor="password">Password</label>
          <input type="password"
                 id="password"
                 name="password"
                 required
                 placeholder="password..."
                 className="w-full p-2 rounded-xl outline-none dark:focus:bg-slate-200 focus:bg-slate-100 transition text-black"
          />
          {state?.errors?.password && state.errors.password.map((error: string, id) => (
              <li key={id} className="text-red-500">{error}</li>))}
          <RegisterButton/>
        </form>
        <p className="text-xl">
          Already have an account? <Link href={"/login"} className="text-violet-500">Login</Link>
        </p>
      </div>
  )
}

export function RegisterButton() {
  const {pending} = useFormStatus();
  return (
      <motion.button
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.4, type: "tween", stiffness: 500, damping: 20}}
          type="submit"
            aria-disabled={pending}
          className="mt-4 w-max self-center rounded-2xl bg-violet-500 p-2 px-8 text-xl text-white transition hover:bg-violet-600">
        {pending ? <RiseLoader loading={pending} color="white"/> : "Register"}
      </motion.button>
  )
}