import Modal from "../../common/modal/Modal"
import MembersForm from "./MembersForm"

interface Props {
closeModal: boolean;
setOpenModal: (active: boolean) => void;
}

const CreateMembers = ({ closeModal, setOpenModal }:Props) => {
  return (
    <Modal nameForm="Додати людей" closeModal={closeModal} setCloseModal={setOpenModal}>
      <MembersForm />
    </Modal>
  )
}

export default CreateMembers
