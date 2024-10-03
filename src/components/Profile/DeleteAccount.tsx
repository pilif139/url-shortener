'use client';

import {User} from "@prisma/client";
import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {deleteAccount} from "@/actions/deleteAccount";

export default function DeleteAccount({user}: {user: User}){

  return(
      <Dialog>
          <div className="flex flex-col gap-5 rounded-xl border-8 border-slate-400 bg-slate-300 p-8 transition w-[20em] dark:border-slate-950 dark:bg-slate-900 md:w-[40em]">
            <h1 className="text-2xl font-bold text-red-600">Delete your account forever</h1>
            <DialogTrigger asChild>
              <button type="submit" className="rounded-2xl bg-red-800 p-4 text-xl font-bold text-white transition duration-500 w-[10em] hover:bg-red-900">Delete</button>
            </DialogTrigger>
          </div>
        <DialogContent className="bg-slate-300 dark:bg-slate-900">
          <DialogHeader>
            <DialogTitle className="text-2xl">Are you absolutely sure?</DialogTitle>
            <DialogDescription className="text-xl">
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex w-full justify-between">
            <DialogClose asChild>
              <button type="submit" className="rounded-2xl bg-red-800 p-4 px-10 text-xl font-bold text-white transition duration-500 hover:bg-red-900">No</button>
            </DialogClose>
            <DialogClose asChild>
              <button type="submit" className="rounded-2xl bg-green-800 p-4 px-10 text-xl font-bold text-white transition duration-500 hover:bg-green-900" onClick={()=>deleteAccount(user.id)}>Yes</button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}