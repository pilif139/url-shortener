'use client'

import Link from "next/link";
import QRCode from "react-qr-code";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import { FiCheck } from "react-icons/fi";

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
          className="mt-5 bg-gray-100 md:p-8 flex flex-col justify-center items-center rounded-3xl hover:bg-gray-300 transition justify-self-end w-max p-4">
        <div className="bg-green-400 hover:bg-green-500 transition p-4 rounded-xl text-gray-700 mb-3 flex items-center gap-2">
          <FiCheck />
          <h2>Successfully generated link!</h2>
        </div>
        <Link href={link} className="hover:text-violet-700 underline text-indigo-700 transition mb-5">
          {link}
        </Link>
        <QRCode value={link} size={qrSize}/>
      </motion.div>
  )
}