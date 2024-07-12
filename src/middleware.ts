import {decrypt} from "@/auth/session";
import {cookies} from 'next/headers';
import {NextRequest, NextResponse} from "next/server";

const protectedRoutes = ['/dashboard'];

export default async function middleware(req: NextRequest){
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path);

  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  if(isProtected && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}