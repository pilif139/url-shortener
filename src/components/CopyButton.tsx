'use client'

import {useState} from "react";

export default function CopyButton({text}: {text: string}) {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy text", error);
    }
  }

  return (
      <button onClick={() => copyToClipboard(text)}
              className="rounded-xl bg-violet-500 p-2 text-xl text-white hover:bg-violet-600">
        {isCopied ? "Copied!" : "Copy"}
      </button>
  );
}