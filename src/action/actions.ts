'use server'

import prisma from '@/db/prisma-client'

export async function addUrl(formData: FormData){

  if(!await prisma.url.findUnique({
    where: {
      alias: formData.get("alias") as string
    }
  })){
    await prisma.url.create({
      data: {
        url: formData.get("url") as string,
        alias: formData.get("alias") as string
      }
    })
    return {success: true}
  }
}