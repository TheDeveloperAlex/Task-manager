import Modal from '../../common/modal/Modal';
import CreateSprintForm from '../createSprintForm/CreateSprintForm';

interface Props{
  closeModal: boolean;
  setCloseModal: (active:boolean) => void;
}

const CreateSprint = ({ closeModal, setCloseModal }:Props) => {
  return (
    <Modal
      nameForm="Створення спринта"
      closeModal={closeModal}
      setCloseModal={setCloseModal}
    >
      <CreateSprintForm setOpenModal={setCloseModal} />
    </Modal>
  );
};

export default CreateSprint;
