'use client'

import Link from "next/link";

type ShortenedLinkProps = {
  alias: string

}

export default function ShortenedLink({alias} : ShortenedLinkProps){
  return (
      <div className="mt-5 bg-gray-300 px-12 h-[10em] flex items-center rounded-3xl hover:bg-gray-400 transition">
        <Link href={window.location.href+"/"+alias} className="hover:text-violet-700 transition">
          {window.location.href+"/"+alias}
        </Link>
      </div>
  )
}