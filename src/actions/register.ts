'use server'

import prisma from "@/db/prisma-client";
import bcrypt from 'bcrypt';
import {FormState, RegisterSchema} from "@/actions/deinitions";
import {createSession} from "@/auth/session";

export async function register(state: FormState, formData: FormData): Promise<FormState>{
    const validateFields = RegisterSchema.safeParse({
        username: formData.get("username") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    });

    if(!validateFields.success){
        return {errors: validateFields.error.flatten().fieldErrors};
    }

    const {username, email, password} = validateFields.data;

    const existingUser = await prisma.user.findFirst({
      where: {
        email: email
      }
    });

    if(existingUser){
        return {errors: {email: ["Email already in use"]}};
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword
        }
    });

    await createSession(data.id.toString());
}

