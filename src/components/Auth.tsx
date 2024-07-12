import Link from "next/link";

export default function AuthComponent(){
  return (
      <div className="absolute top-0 right-0 text-slate-100 text-2xl  p-14 bg-slate-400 rounded-bl-3xl">
        <Link href={"/login"}>Login</Link>
      </div>
  )
}