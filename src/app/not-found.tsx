import Link from "next/link";

export default function NotFound(){
  return (
      <div className="text-2xl flex flex-col items-center justify-center">
        <h1>Page not found 404.</h1>
        <Link href={"/"} className="text-violet-500 font-bold text-3xl bg-slate-300 p-3 my-5 rounded-3xl hover:text-violet-600 hover:bg-slate-400 transition">Return to home page.</Link>
      </div>
  )
}