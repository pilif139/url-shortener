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
        ref={dialogRef}
        onClick={closeDialog}
        onClose={closeDialog}
        className="backdrop:bg-black/60 backdrop:backdrop-blur-sm bg-transparent">
      <div className="bg-slate-200 dark:bg-slate-800 p-14 rounded-2xl dark:text-white shadow-2xl">
        {children}
      </div>
    </dialog>
  )
}