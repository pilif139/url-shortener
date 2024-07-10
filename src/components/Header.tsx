import Link from "next/link";

export default function Header() {
  return (
      <header className="absolute top-0 w-full flex justify-center p-12">
        <Link href={"/"}>
          <h1 className="text-6xl hover:bg-slate-300 transition p-5 rounded-full">
            <span className="text-violet-500 hover:text-violet-800 transition">URL</span>
            &nbsp;Shortener
          </h1>
        </Link>
      </header>
  );
}