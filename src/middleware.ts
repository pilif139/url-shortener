import {verifySession} from "@/auth/session";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

const protectedRoutes = ['/dashboard'];

export default async function middleware(req: NextRequest){
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path);

  const session = await verifySession()

  if(isProtected && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  return NextResponse.next()
}