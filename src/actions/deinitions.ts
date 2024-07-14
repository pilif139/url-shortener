import {z} from 'zod';

export const RegisterSchema = z.object({
  username: z
      .string()
      .min(3, {message: "Username must be at least 3 characters long"})
      .max(30, {message: "Username must be at most 30 characters long"})
      .trim(),
  email: z.string().email({message: "Invalid email address"}).trim(),
  password: z
      .string()
      .min(8, {message: "Password must be at least 8 characters long"})
      .regex(/[a-zA-Z]/, {message: "Password must contain at least one letter"})
      .regex(/[0-9]/, {message: "Password must contain at least one number"})
      .regex(/[^a-zA-Z0-9]/, {message: "Password must contain at least one special character"})
      .trim(),
});

export const LoginSchema = z.object({
  email: z.string().email({message: "Invalid email address"}),
  password: z.string().min(1, {message: "Please enter your password"}),
});

export type FormState = | {
  errors?: {
    username?: string[],
    email?: string[],
    password?: string[],
  };
  message?: string;
} | undefined;
