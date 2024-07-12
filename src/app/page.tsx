'use client'

import Form from "@/components/Form";
import {useEffect, useState} from "react";
import ShortenedLink from "@/components/ShortenedLink";
import {RiseLoader} from "react-spinners";

export default function Home() {
  const [alias, setAlias] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [spinnerTheme, setSpinnerTheme] = useState<"black" | "white">("black");

  useEffect(() => {
     setSpinnerTheme(window.localStorage.getItem("theme") === "dark" ? "white" : "black");
  }, []);

  return (
    <main className="flex flex-col items-center justify-center text-2xl">
      <Form setAlias={setAlias} setIsLoading={setIsLoading}></Form>
      {!isLoading && alias && <ShortenedLink alias={alias}/>}
      <RiseLoader loading={isLoading} size={20} className="mt-20" color={spinnerTheme}/>
    </main>
  );
}
