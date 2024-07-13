import prisma from "@/db/prisma-client";
import {notFound, permanentRedirect} from "next/navigation";

export default async function AliasHandler({params}: {params: {alias: string}}){
  const url = await prisma.shortUrl.findUnique({
    where: {
      alias: params.alias
    }
  })
  if(url){
    // Increment the click count
    await prisma.shortUrl.update({
      where: {
        id: url.id
      },
      data: {
        clicks: {
          increment: 1
      }
    }});

    // Redirect to the URL
    permanentRedirect(url.url)
  }
  else{
    notFound();
  }
}