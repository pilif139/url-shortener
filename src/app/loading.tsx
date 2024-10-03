'use client'

import {RiseLoader} from "react-spinners";
import {useEffect, useState} from "react";

export default function Loading(){
  const [spinnerTheme, setSpinnerTheme] = useState<"black" | "white">("black");

  useEffect(() => {
    setSpinnerTheme(window.localStorage.getItem("theme") === "dark" ? "white" : "black");
  }, []);

    return (
        <div className="absolute top-0 flex h-screen w-screen items-center justify-center backdrop:bg-black/60 backdrop:backdrop-blur-sm">
            <RiseLoader loading={true} size={20} className="mt-20" color={spinnerTheme}/>
        </div>
    )
}