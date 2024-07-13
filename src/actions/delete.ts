'use server'

import prisma from '@/db/prisma-client'
import {revalidatePath} from "next/cache";

export default async function deleteUrl(alias: string){
  await prisma.shortUrl.delete({
    where: {
      alias
    }
  })
  revalidatePath('/dashboard')
}