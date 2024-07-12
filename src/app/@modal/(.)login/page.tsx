import Login from '@/components/Login'
import Modal from "@/components/Modal";

export default function InterceptedLoginPage(){
  return(
    <Modal>
      <Login/>
    </Modal>
  )
}