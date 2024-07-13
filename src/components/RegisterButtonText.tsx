import {verifySession} from "@/auth/session";
import {getUserById} from "@/db/queries";
import {CiLogin} from "react-icons/ci";
import {MdOutlineAccountBox} from "react-icons/md";
import Link from "next/link";

export default async function RegisterButtonText(){
  const {isAuth, userId} = await verifySession();
  let username = '';
  if(userId){
    username = await getUserById(userId).then(user => user?.username) as string;
  }
  if(isAuth){
    return (
        <p className="flex items-center cursor-pointer gap-2">{username}
          <MdOutlineAccountBox className="text-3xl"/>
        </p>
    )
  }
  else{
    return (
        <Link href={"/register"} className="flex items-center">Sign up<CiLogin /></Link>
    )
  }

}