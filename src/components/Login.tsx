'use client'

import {motion} from "framer-motion";
import Link from "next/link";
import {useFormState, useFormStatus} from "react-dom";
import {login} from "@/actions/login";
import {RiseLoader} from "react-spinners";

export default function Login(){
  const [state, action] = useFormState(login, undefined)

  return (
      <div className="flex flex-col items-center gap-10 px-10">
        <h1 className="text-4xl">Log In</h1>
        <form action={action}
              className="flex flex-col gap-1 text-xl">
          <label htmlFor="email">Email</label>
          <input type="email"
                 id="email"
                 name="email"
                 required
                 placeholder="email..."
                 className="rounded-xl p-2 text-black outline-none transition w-[15em] focus:bg-slate-100 dark:focus:bg-slate-200"
          />
          {state?.errors?.email && state.errors.email.map((error: string, id) => (
              <li key={id} className="text-red-500">{error}</li>))}
          <label htmlFor="password">Password</label>
          <input type="password"
                 id="password"
                 name="password"
                 required
                 placeholder="password..."
                 className="rounded-xl p-2 text-black outline-none transition w-[15em] focus:bg-slate-100 dark:focus:bg-slate-200"
          />
          {state?.errors?.password && state.errors.password.map((error: string, id) => (
              <li key={id} className="text-red-500">{error}</li>))}
          {state?.message && <p className="text-red-500">{state.message}</p>}
          <LoginButton/>
        </form>
        <p className="mt-3 text-xl">
          Don&apos;t have account? <Link href={"/register"} className="text-violet-500">Register</Link>
        </p>
      </div>
  )
}

export function LoginButton() {
  const {pending} = useFormStatus();
  return (
      <motion.button
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.4, type: "tween", stiffness: 500, damping: 20}}
          type="submit"
          aria-disabled={pending}
          className="mt-4 w-max self-center rounded-2xl bg-violet-500 p-2 px-8 text-xl text-white transition hover:bg-violet-600">
        {pending ? <RiseLoader loading={pending} size={10} color="white"/> : "Log In"}
      </motion.button>
  )
}