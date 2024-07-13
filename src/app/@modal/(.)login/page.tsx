import Login from '@/components/Login'
import Modal from "@/components/Modal";

export default function InterceptedRegisterPage(){
  return(
      <Modal>
        <Login/>
      </Modal>
  )
}