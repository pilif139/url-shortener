type ModalProps = {
    children: React.ReactNode

}

export default function Modal({children} : ModalProps){
  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  )
}