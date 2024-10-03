import 'server-only'

import type {SessionPayload} from '@/auth/definitions'
import {SignJWT, jwtVerify} from "jose";
import {cookies} from 'next/headers'
import {redirect} from "next/navigation";

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload){
    return await new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('168h')
        .sign(key);
}
export async function decrypt(session: string | undefined = ''){
    try {
        const {payload} = await jwtVerify(session, key, {
            algorithms: ['HS256']
        });
        return payload as SessionPayload;
    } catch (err) {
        return null;
    }
}
export async function createSession(userId: string){
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
  const session = await encrypt({userId, expiresAt});

  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/'
  });

  redirect('/dashboard');
}

export async function verifySession(){
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  if(!session?.userId){
    return {isAuth: false}
  }

  return {isAuth: true, userId: String(session.userId)}
}

export function deleteSession(){
  cookies().delete('session');
  redirect('/')
}