'use server'

import prisma from "@/db/prisma-client"
import {revalidatePath} from "next/cache";

export async function updateUsername(formData: FormData, userId: string){
    const username = formData.get("username") as string;
    if(username.length < 3){
        return {errors: "Username must be at least 3 characters long."};
    }
    await prisma.user.update({
        where: {id: userId},
        data: {username: username}
    })
    revalidatePath('/profile')
    return {errors: undefined}
}