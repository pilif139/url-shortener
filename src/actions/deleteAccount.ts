'use server';

import prisma from "@/db/prisma-client";
import {deleteSession} from "@/auth/session";

export async function deleteAccount(userId: string){
    try {
        await prisma.user.delete({
        where: {
            id: userId
        }
        })
        deleteSession();
    } catch (error) {
        console.error(error)
    }
}