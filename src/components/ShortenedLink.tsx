'use client'

import Link from "next/link";
import QRCode from "react-qr-code";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";

type ShortenedLinkProps = {
  alias: string

}

export default function ShortenedLink({alias} : ShortenedLinkProps){
    const [qrSize, setQrSize] = useState<number>(250);
    useEffect(() => {
      const handleResize = () => {
        setQrSize(window.innerWidth > 768 ? 250 : 200);
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  const link = window.location.href+alias;

  return (
      <motion.div key={alias}
          initial={{opacity: 0, scale: 0.90}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="mt-5 bg-gray-100 p-8 flex flex-col justify-center items-center rounded-3xl hover:bg-gray-300 transition justify-self-end">
        Generated link:
        <Link href={link} className="hover:text-violet-700 underline text-indigo-700 transition mb-5">
          {link}
        </Link>
        <QRCode value={link} size={qrSize}/>
      </motion.div>
  )
}