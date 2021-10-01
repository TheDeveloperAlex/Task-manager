import Modal from '../../common/modal/Modal';
import AddProjectModal from './AddProjectModal';

interface ICreateProjectProps {
  closeModal: boolean;
  setCloseModal: (active: boolean) => void;
}

const CreateProject = ({ closeModal, setCloseModal }: ICreateProjectProps) => {
  return (
    <Modal
      nameForm="Створення проекту"
      closeModal={closeModal}
      setCloseModal={setCloseModal}
    >
      <AddProjectModal setCloseModal={setCloseModal} />
    </Modal>
  );
};

export default CreateProject;
