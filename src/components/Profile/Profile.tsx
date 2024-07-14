import UsernameSheet from "@/components/Profile/UsernameSheet";
import {User} from "@prisma/client";
import DeleteAccount from "@/components/Profile/DeleteAccount";

type ProfileProps = {
  user: User;
}

export default function Profile({user}: ProfileProps){
  return (
      <div className="min-h-[65vh] flex flex-col items-center gap-6">
        <h1 className="text-5xl mb-5">Your Profile</h1>
        <UsernameSheet user={user}/>
        <DeleteAccount user={user}/>
      </div>
  )
}