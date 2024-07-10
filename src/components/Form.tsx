"use client"

import {useState} from "react";
import {addUrl} from "@/action/actions";
import {z} from "zod";


const urlSchema = z.object({
  url: z.string()
      .url({message: "Invalid URL!"}),
  alias: z.string()
      .max(40, {message: "To long alias!"})
      .optional()
})


export default function Form(){
  const [urlError, setUrlError] = useState<string>("");
  const [aliasError, setAliasError] = useState<string>("");

  const clientAction = async (formData : FormData) => {
    const newUrl = {
      url: formData.get("url") as string,
      alias: formData.get("alias") as string
    }

    const result = urlSchema.safeParse(newUrl);
    if(!result.success){
      setUrlError(result.error.errors[0].message);
      if(result.error.errors[1]) {
        setAliasError(result.error.errors[1].message);
      }
      return;
    }
    setUrlError("");
    setAliasError("");
    await addUrl(formData)
  }


  return (
      <form action={clientAction} className="flex flex-col gap-5 items-center">
        <input type="text" placeholder="Enter your url here..."
               className="p-2 rounded-2xl w-[30em] outline-none focus:bg-slate-100 transition" name="url" required/>
        {urlError && <p className="text-red-500">{urlError}</p>}
        <input type="text" placeholder="Your optional alias..."
               className="p-2 rounded-2xl w-[30em] outline-none focus:bg-slate-100 transition" name="alias"/>
        {aliasError && <p className="text-red-500">{aliasError}</p>}
        <button type="submit"
                className="bg-violet-500 p-2 px-8 rounded-2xl mx-4 text-white w-max hover:bg-violet-600 transition">Submit
        </button>
      </form>
  )
}