'use client'

import React, {useEffect, useRef} from "react"
import {useRouter} from "next/navigation"

type ModalProps = {
    children: React.ReactNode
}


export default function Modal({children} : ModalProps){
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    dialogRef.current?.showModal()
  }, []);

  const closeDialog = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) =>
    e.target === dialogRef.current && router.back();

  return (
    <dialog
        aria-label="dialog"
        ref={dialogRef}
        onClick={closeDialog}
        onClose={closeDialog}
        className="bg-transparent backdrop:bg-black/60 backdrop:backdrop-blur-sm">
      <div className="rounded-2xl bg-slate-200 p-14 shadow-2xl dark:bg-slate-800 dark:text-white">
        {children}
      </div>
    </dialog>
  )
}