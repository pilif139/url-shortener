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
import {User} from "@prisma/client";
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
        <nav className="flex items-center justify-between gap-5 text-2xl">
          <p className="rounded-xl border-4 border-slate-400 bg-slate-300 p-3 transition dark:border-slate-950 dark:bg-slate-900">
            <span className="text-gray-500 transition dark:text-gray-200">Username:</span> {user.username}
          </p>
          <SheetTrigger asChild>
            <button onClick={()=>setIsOpen(true)} className="rounded-2xl bg-violet-500 px-5 py-3 text-2xl text-white transition hover:bg-violet-600">Change</button>
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
                   className="mt-4 w-full rounded-xl border-2 border-gray-300 p-3 outline-none transition duration-500 focus:bg-slate-100 dark:border-gray-700 dark:text-black" name="username"
                   defaultValue={user.username}/>
            {formErrors && <p className="text-red-500">{formErrors}</p>}
              <button type="submit"
                      className="mt-3 rounded-xl border-2 border-gray-300 bg-slate-300 px-5 py-2 text-black transition duration-500 hover:bg-slate-400 dark:border-gray-700">Submit
              </button>
          </form>
        </SheetContent>
      </Sheet>
  )
}