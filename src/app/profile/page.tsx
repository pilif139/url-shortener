import {verifySession} from "@/auth/session";
import prisma from "@/db/prisma-client";
import {redirect} from "next/navigation";
import Profile from "@/components/Profile/Profile";

export default async function ProfilePage(){
  const {userId} = await verifySession();
  if(!userId){
    redirect("/login");
  }
  const user = await prisma.user.findUnique({
      where: {id: userId},
  });
  if(!user){
    redirect("/login");
  }

    return (
        <Profile user={user}/>
    )
}