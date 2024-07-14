'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {User} from "@/components/Profile/Profile";
import {updateUsername} from "@/actions/updateUsername";
import {FormEvent, useState} from "react";

export default function UsernameSheet({user}: {user: User}) {
  const [formErrors, setFormErrors] = useState<string | undefined>(undefined); //only for displaying errors
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const result = await updateUsername(formData, user.id);
    if (!result.errors) {
      setFormErrors(undefined);
      setIsOpen(false)
    } else {
        setFormErrors(result.errors)
    }
  };

  return(
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <nav className="flex justify-between items-center gap-5">
          <p className="text-3xl dark:bg-slate-700 rounded-xl min-w-[10em] max-w-[25em] flex justify-between items-center bg-slate-300 hover:bg-slate-400 dark:hover:bg-slate-950 transition">
            <span className="bg-slate-400 dark:bg-slate-900 rounded-xl p-3">Username</span>
            <span className="p-3">{user.username}</span>
          </p>
          <SheetTrigger asChild>
            <button onClick={()=>setIsOpen(true)} className="bg-violet-500 px-5 py-3 text-white rounded-2xl text-2xl hover:bg-violet-600 transition">Change</button>
          </SheetTrigger>
        </nav>

        <SheetContent onEscapeKeyDown={()=>setIsOpen(false)}
                      onInteractOutside={()=>setIsOpen(false)}
                      className="border-none dark:bg-slate-900">
          <SheetHeader>
            <SheetTitle>Edit your username</SheetTitle>
          </SheetHeader>
          <SheetDescription asChild>
            <p className="text-lg">Your username is how other users will identify you.</p>
          </SheetDescription>
          <form onSubmit={handleSubmit}>
            <input type="text"
                   className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-xl dark:text-black mt-4 outline-none focus:bg-slate-100 transition duration-500" name="username"
                   defaultValue={user.username}/>
            {formErrors && <p className="text-red-500">{formErrors}</p>}
              <button type="submit"
                      className="text-black border-2 border-gray-300 dark:border-gray-700 px-5 py-2 bg-slate-300 rounded-xl mt-3 hover:bg-slate-400 transition duration-500">Submit
              </button>
          </form>
        </SheetContent>
      </Sheet>
  )
}