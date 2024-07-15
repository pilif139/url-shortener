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
          <div className="md:w-[40em] w-[20em] bg-slate-300 p-8 border-8 border-slate-400 dark:border-slate-950 rounded-xl dark:bg-slate-900 transition flex flex-col gap-5">
            <h1 className="text-2xl text-red-600 font-bold">Delete your account forever</h1>
            <DialogTrigger asChild>
              <button type="submit" className="bg-red-800 hover:bg-red-900 p-4 text-white rounded-2xl font-bold text-xl w-[10em] transition duration-500">Delete</button>
            </DialogTrigger>
          </div>
        <DialogContent className="dark:bg-slate-900 bg-slate-300">
          <DialogHeader>
            <DialogTitle className="text-2xl">Are you absolutely sure?</DialogTitle>
            <DialogDescription className="text-xl">
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-full flex justify-between">
            <DialogClose asChild>
              <button type="submit" className="bg-red-800 hover:bg-red-900 p-4 text-white rounded-2xl font-bold text-xl transition duration-500 px-10">No</button>
            </DialogClose>
            <DialogClose asChild>
              <button type="submit" className="bg-green-800 hover:bg-green-900 p-4 text-white rounded-2xl font-bold text-xl transition duration-500 px-10" onClick={()=>deleteAccount(user.id)}>Yes</button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}