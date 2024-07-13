import prisma from "@/db/prisma-client";

export async function getUserById(id: string) {
    return await prisma.user.findUnique({
        where: { id }
    });
}