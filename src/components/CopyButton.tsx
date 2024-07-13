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
              className="bg-violet-500 text-xl p-2 rounded-xl hover:bg-violet-600 text-white">
        {isCopied ? "Copied!" : "Copy"}
      </button>
  );
}