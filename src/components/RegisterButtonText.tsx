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
        <p className="flex cursor-pointer items-center gap-2 text-3xl transition">
          <ProfileMenu username={username}/>
        </p>
    )
  }
  else{
    return (
        <div className="flex items-center gap-4">
          <Link href={"/register"} className="rounded-xl bg-slate-800 p-2 text-white transition hover:bg-slate-900 dark:bg-slate-200 dark:text-black dark:hover:bg-slate-100">Sign up</Link>
          <Link href={"/login"} className="flex items-center rounded-xl border-2 border-slate-800 bg-slate-300 p-2 text-black transition hover:bg-slate-200 dark:border-slate-200 dark:bg-slate-900 dark:text-white hover:dark:bg-slate-800">Login<CiLogin/></Link>
        </div>
    )
  }

}