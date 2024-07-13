'use client'

import {useState, useEffect} from "react";
import {Row} from "@tanstack/table-core";
import {ShortLink} from "@/components/Dashboard/columnsDefinitions";

export default function CopyOption({row}: {row: Row<ShortLink>}){
  const [copyLink, setCopyLink] = useState<string>("")

  useEffect(() => {
      const {protocol, hostname, port} = window.location;
      const portPart = port ? `:${port}` : '';
      setCopyLink(`${protocol}//${hostname}${portPart}/${row.original.alias}`);
  }, []);

  const handleCopy = async ()=>{
    try {
      await navigator.clipboard.writeText(copyLink);
    } catch (error) {
      console.error("Failed to copy text", error);
    }
  }

  return(
    <button onClick={handleCopy}>Copy Link</button>
  )
}