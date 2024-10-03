import UsernameSheet from "@/components/Profile/UsernameSheet";
import {User} from "@prisma/client";
import DeleteAccount from "@/components/Profile/DeleteAccount";

type ProfileProps = {
  user: User;
}

export default function Profile({user}: ProfileProps){
  return (
      <div className="flex flex-col items-center gap-6 min-h-[65vh]">
        <h1 className="mb-5 text-5xl">Your Profile</h1>
        <UsernameSheet user={user}/>
        <DeleteAccount user={user}/>
      </div>
  )
}