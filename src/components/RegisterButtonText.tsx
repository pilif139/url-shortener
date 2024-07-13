import {verifySession} from "@/auth/session";
import {getUserById} from "@/db/queries";
import {CiLogin} from "react-icons/ci";
import {MdOutlineAccountBox} from "react-icons/md";
import Link from "next/link";
import ProfileMenu from "@/components/ProfileMenu";

export default async function RegisterButtonText(){
  const {isAuth, userId} = await verifySession();
  let username = '';
  if(userId){
    username = await getUserById(userId).then(user => user?.username) as string;
  }
  if(isAuth){
    return (
        <p className="flex items-center cursor-pointer gap-2 text-3xl">
          <ProfileMenu username={username}/>
        </p>
    )
  }
  else{
    return (
        <div className="flex items-center gap-4">
          <Link href={"/register"} className="text-white bg-slate-800 dark:bg-slate-200 dark:text-black p-2 rounded-xl transition hover:bg-slate-900 dark:hover:bg-slate-100">Sign up</Link>
          <Link href={"/login"} className="flex items-center border-2 border-slate-800 dark:border-slate-200 p-2 rounded-xl dark:bg-slate-900 bg-slate-300 hover:bg-slate-200 hover:dark:bg-slate-800 text-black dark:text-white transition">Login<CiLogin/></Link>
        </div>
    )
  }

}