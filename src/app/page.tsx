'use client'

import Form from "@/components/Form";
import {useState} from "react";
import ShortenedLink from "@/components/ShortenedLink";

export default function Home() {
  const [alias, setAlias] = useState<string | undefined>("");

  return (
    <main className="text-2xl flex flex-col items-center justify-center">
      <Form setAlias={setAlias}></Form>
        {alias && <ShortenedLink alias={alias}/>}
    </main>
  );
}
