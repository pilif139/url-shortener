"use client"

import {useState, useRef} from "react";
import {addUrl} from "@/action/actions";
import {motion} from "framer-motion";
import {z} from "zod";

const urlSchema = z.object({
  url: z.string()
      .url({message: "Invalid URL!"}),
  alias: z.string()
      .max(40, {message: "To long alias!"})
      .optional()
})

type FormProps = {
  setAlias: (alias: string | undefined) => void
    setIsLoading: (isLoading: boolean) => void
}

export default function Form({setAlias, setIsLoading} : FormProps){
  const [urlError, setUrlError] = useState<string>("");
  const [aliasError, setAliasError] = useState<string>("");

  const urlRef = useRef<HTMLInputElement>(null);
  const aliasRef = useRef<HTMLInputElement>(null);

  const clientAction = async (formData : FormData) => {
    const newUrl = {
      url: formData.get("url") as string,
      alias: formData.get("alias") as string
    }

    const result = urlSchema.safeParse(newUrl);
    if(!result.success){
      setUrlError(result.error.errors[0].message);
      setAlias(undefined)
      if(result.error.errors[1]) {
        setAliasError(result.error.errors[1].message);
      }
      setIsLoading(false);
      return;
    }

    // code when the zod validation passes
    const response = await addUrl(formData)
    setAlias(response.alias)
    if(response.error){
        setAliasError(response.error)
    }
    else{
      setUrlError("");
      setAliasError("");
      if(urlRef.current && aliasRef.current) {
        urlRef.current.value = "";
        aliasRef.current.value = "";
      }
    }
    setIsLoading(false);
  }
  return (
        <form action={clientAction} className="flex flex-col gap-5 items-center">
          <motion.input
                  initial={{opacity: 0, x: -200}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.2, type: "tween", stiffness: 500, damping: 20}}
                  type="text"
                  placeholder="Enter your url here..."
                  className="p-2 rounded-2xl w-[15em] md:w-[30em] outline-none focus:bg-slate-100 transition dark:bg-slate-400 dark:placeholder:text-slate-800 dark:focus:bg-slate-300 dark:text-black"
                  name="url"
                  ref={urlRef}
          />
          {urlError && <motion.p initial={{y:-20}} animate={{y:0}} className="text-red-500">{urlError}</motion.p>}
          <motion.input
                  initial={{opacity: 0, x: 200}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.2, type: "tween", stiffness: 500, damping: 20}}
                  type="text"
                  placeholder="Your optional alias..."
                  className="p-2 rounded-2xl w-[15em] md:w-[30em] outline-none focus:bg-slate-100 transition dark:bg-slate-400 dark:placeholder:text-slate-800 dark:focus:bg-slate-300 dark:text-black"
                  name="alias"
                  ref={aliasRef}
          />
          {aliasError && <motion.p initial={{y:-20}} animate={{y:0}} className="text-red-500">{aliasError}</motion.p>}
          <motion.button
                  initial={{opacity: 0, scale: 0.9}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.4, type: "tween", stiffness: 500, damping: 20}}
                  type="submit"
                  onClick={() => setIsLoading(true)}
                  className="bg-violet-500 p-2 px-8 rounded-2xl mx-4 text-white w-max hover:bg-violet-600 transition">Submit
          </motion.button>
        </form>
  )
}