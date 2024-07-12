import prisma from "@/db/prisma-client";
import {notFound, permanentRedirect} from "next/navigation";

export default async function AliasHanlder({params}: {params: {alias: string}}){
  const url = await prisma.shortUrl.findUnique({
    where: {
      alias: params.alias
    }
  })
  if(url){
    permanentRedirect(url.url)
  }
  else{
    notFound();
  }
}