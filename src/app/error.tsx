"use client";

import {useEffect} from "react";
import {Button} from "@/components/ui/button";

type ErrorProps = {
  error: Error & { statusCode: number },
  reset: () => void
}

export default function Error({error, reset}: ErrorProps){
    useEffect(() => {
      // Log the error to an error reporting service
      console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-200">Something went wrong</h1>
            <Button className="text-2xl p-6 rounded-xl shadow-lg shadow-gray-900" onClick={()=>reset()}>Try Again</Button>
        </div>
    )
}