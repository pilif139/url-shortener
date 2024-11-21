import {verifySession} from "@/auth/session";
import {NextRequest, NextResponse} from "next/server";
const protectedRoutes = ['/dashboard'];

export default async function middleware(req: NextRequest){
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path);

  if(isProtected) {
    // Verify the session only if the route is protected to avoid unnecessary calls
    const session = await verifySession();
    if(!session.userId){
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }
  return NextResponse.next()
}