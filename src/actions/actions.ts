'use server'

import prisma from '@/db/prisma-client'
import {verifySession} from "@/auth/session";

function generateAlias(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let alias = '';
    for (let i = 0; i < 12; i++) {
        alias += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return alias;
}

async function ensureUniqueAlias(providedAlias: string){
  let alias = providedAlias;
  if(alias === ""){
    do{
      alias = generateAlias();
    }while(await prisma.shortUrl.findUnique({where: {alias}}))
  }
  return alias;
}

export async function addUrl(formData: FormData){
  const alias = await ensureUniqueAlias(formData.get("alias") as string);
  const {userId} = await verifySession();

  if(!await prisma.shortUrl.findUnique({
    where: {
      alias: formData.get("alias") as string
    }
  })){
    await prisma.shortUrl.create({
      data: {
        url: formData.get("url") as string,
        alias: alias,
        userId: userId ? userId : undefined
      }
    })
    return {alias, error: undefined}
  }
  else {
    return {alias: undefined, error: "Alias already exists!"}
  }
}