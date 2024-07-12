'use server'

import {deleteSession} from "@/auth/session";

export async function logout(){
  deleteSession();
}