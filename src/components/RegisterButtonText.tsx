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
        <div className="flex items-center gap-4">
          <Link href={"/register"} className="text-white bg-slate-800 dark:bg-slate-200 dark:text-black p-2 rounded-xl transition">Sign up</Link>
          <Link href={"/login"} className="flex items-center">Login<CiLogin/></Link>
        </div>
    )
  }

}