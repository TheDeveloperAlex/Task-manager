import { useState } from 'react';
import { useDispatch } from 'react-redux';

import SubmitButton from '../../common/submitButton/SubmitButton';
import { WrapperForm } from './AddProjectModalStyled';
import projectsOperations from '../../../redux/projects/projects-operations';

interface IAddProjectModalProps {
  setCloseModal: (active: boolean) => void;
}

const AddProjectModal = ({ setCloseModal }: IAddProjectModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(projectsOperations.postProject({ title, description }));
    setTitle('');
    setDescription('');
    setCloseModal(false);
  };

  return (
    <WrapperForm>
      <form className="form" onSubmit={onHandleSubmit}>
        <label>
          <input
            className="input"
            type="text"
            name="title"
            value={title}
            placeholder="Назва проекту"
            required
            onChange={handleChangeTitle}
          />
        </label>

        <label>
          <h3 className="inputTitle">Опис</h3>
          <input
            type="text"
            className="input"
            name="description"
            value={description}
            required
            onChange={handleDescription}
          />
        </label>
        <div className="submitWrapper">
          <SubmitButton nameBtn="Готово" />
        </div>
      </form>
    </WrapperForm>
  );
};

export default AddProjectModal;
