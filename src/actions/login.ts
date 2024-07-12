'use server'

import {FormState, LoginSchema} from "@/actions/deinitions";
import bcrypt from 'bcrypt';
import prisma from "@/db/prisma-client";
import {createSession} from "@/auth/session";

export async function login(state: FormState, formData: FormData) : Promise<FormState> {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });
  const errorMessage = {message: "Invalid login credentials"};

  if (!validatedFields.success) {
    return {errors: validatedFields.error.flatten().fieldErrors};
  }

  const user = await prisma.user.findUnique({
    where: {email: validatedFields.data.email}
  });

  if(!user){
    return errorMessage
  }

  const passwordMatch = await bcrypt.compare(validatedFields.data.password, user.password);

  if(!passwordMatch){
    return errorMessage
  }

  const userId = user.id.toString();
  await createSession(userId);
}