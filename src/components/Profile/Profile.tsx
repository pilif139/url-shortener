import UsernameSheet from "@/components/Profile/UsernameSheet";

export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
}

type ProfileProps = {
  user: User;
}

export default function Profile({user}: ProfileProps){
  return (
      <div className="min-h-[65vh] flex flex-col items-center">
        <h1 className="text-5xl mb-5">Your Profile</h1>
        <UsernameSheet user={user}/>
      </div>
  )
}