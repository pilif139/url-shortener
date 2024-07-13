'use client'

import Link from "next/link";
import QRCode from "react-qr-code";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import { FiCheck } from "react-icons/fi";
import CopyButton from "@/components/CopyButton";

type ShortenedLinkProps = {
  alias: string
}

export default function ShortenedLink({alias} : ShortenedLinkProps){

    //handle resizing for mobiles
    const [qrSize, setQrSize] = useState<number>(window.innerWidth > 768 ? 250 : 200);
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
          className="mt-5 flex w-max flex-col items-center justify-center justify-self-end rounded-3xl bg-gray-100 dark:bg-slate-600 p-4 transition hover:bg-gray-300 dark:hover:bg-slate-700 md:p-8 gap-2">
        <div className="mb-3 flex items-center gap-2 rounded-xl bg-green-400 p-4 text-gray-700 transition hover:bg-green-500">
          <FiCheck />
          <h2>Successfully generated link!</h2>
        </div>
        <Link href={link} className="mb-5 text-indigo-700 dark:text-indigo-500 underline transition hover:text-violet-700 dark:hover:text-indigo-400">
          {link}
        </Link>
        <CopyButton text={link}/>
        <QRCode value={link} size={qrSize}/>
      </motion.div>
  )
}