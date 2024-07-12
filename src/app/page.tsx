'use client'

import Form from "@/components/Form";
import {useState} from "react";
import ShortenedLink from "@/components/ShortenedLink";
import {RiseLoader} from "react-spinners";

export default function Home() {
  const [alias, setAlias] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main className="text-2xl flex flex-col items-center justify-center">
      <Form setAlias={setAlias} setIsLoading={setIsLoading}></Form>
      {!isLoading && alias && <ShortenedLink alias={alias}/>}
      <RiseLoader loading={isLoading} size={20} className="mt-20"/>
    </main>
  );
}
