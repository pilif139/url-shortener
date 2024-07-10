import {NextRequest} from "next/server";
import prisma from "@/db/prisma-client";
import {notFound, permanentRedirect} from "next/navigation";

export async function GET(req: NextRequest, {params}: {params: {alias: string}}){
  const url = await prisma.url.findUnique({
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