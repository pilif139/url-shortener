'use client'

import Link from "next/link";
import QRCode from "react-qr-code";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import { FiCheck } from "react-icons/fi";
import CopyButton from "@/components/CopyButton";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type ShortenedLinkProps = {
  alias: string
}

export default function ShortenedLink({alias} : ShortenedLinkProps){
    //handle resizing for mobiles
    const [qrSize, setQrSize] = useState<number>(window.innerWidth > 768 ? 200 : 150);
    useEffect(() => {
      const handleResize = () => {
        setQrSize(window.innerWidth > 768 ? 200 : 150);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
      }, []);

    if(alias === "" || alias === null) throw new Error("Alias cannot be empty");
    const link = window.location.href+alias;
    return (
      <motion.div key={alias}
          initial={{opacity: 0, scale: 0.90}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="mt-5 flex w-max flex-col items-center justify-center gap-2 justify-self-end rounded-3xl bg-gray-100 p-4 transition hover:bg-gray-300 dark:bg-slate-600 md:p-8 dark:hover:bg-slate-700">
        <div className="mb-3 flex items-center gap-2 rounded-xl bg-green-400 p-4 text-gray-700 transition hover:bg-green-500">
          <FiCheck />
          <h2>Successfully generated link!</h2>
          <CopyButton text={link}/>
        </div>
        <Link href={link} className="mb-5 text-indigo-700 underline transition hover:text-violet-700 dark:text-indigo-500 dark:hover:text-indigo-400">
          {link}
        </Link>
        <QRCode value={link} size={qrSize} role="img"/>
      </motion.div>
    )
}