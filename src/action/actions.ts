'use server'

import prisma from '@/db/prisma-client'

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
    }while(await prisma.url.findUnique({where: {alias}}))
  }
  return alias;
}

export async function addUrl(formData: FormData){
  const alias = await ensureUniqueAlias(formData.get("alias") as string);

  if(!await prisma.url.findUnique({
    where: {
      alias: formData.get("alias") as string
    }
  })){
    await prisma.url.create({
      data: {
        url: formData.get("url") as string,
        alias: alias
      }
    })
    return {alias, error: undefined}
  }
  else{
    return {alias: undefined, error: "Alias already exists!"}
  }
}