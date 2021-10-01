import Modal from "../../common/modal/Modal"
import TaskForm from "./TaskForm"

interface Props {
closeModal: boolean;
setCloseModal: (active: boolean) => void;
}

const CreateTask = ({ closeModal, setCloseModal }: Props) => {
  return (
    <Modal nameForm="Створення задачі" closeModal={closeModal} setCloseModal={setCloseModal}>
      <TaskForm setCloseModal={setCloseModal} />
    </Modal>
  )
}

export default CreateTask
