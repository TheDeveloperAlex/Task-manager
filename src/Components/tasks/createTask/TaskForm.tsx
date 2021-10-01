import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/task/task-operations";

import SubmitButton from "../../common/submitButton/SubmitButton";
import { WrapperForm } from "./TaskFormStyled";
import { useParams } from "react-router";
import { toast } from "react-toastify";


interface ICloseModalProps {
  setCloseModal: (active: boolean) => void;
}

interface IId {
  id: string;
}

type THours = number;

const TaskForm = ({ setCloseModal } : ICloseModalProps) => {
  const [title, setTitle] = useState("");
  const [hoursPlanned, setHoursPlanned] = useState<THours>(0);
  const { id } = useParams<IId>();  

  const handleChangeTitle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.currentTarget.value);
  };

  useEffect(() => {
  
  if (hoursPlanned > 8) {
    toast.warning(
      "Максимальний час на виконання однієї задачі - 8 год на день. Не перепрацьовуйте!"
    );
  }
}, [hoursPlanned])


  const handleHoursPlanned = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setHoursPlanned(Number(evt.currentTarget.value));  
  };

  const dispatch = useDispatch();

  const onHandleSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addTask({ sprintId: id, task: { title, hoursPlanned } }));
    setTitle("");    
    setCloseModal(false);
  };

  return (
    <WrapperForm>
      <form onSubmit={onHandleSubmit}>
        <label>
          <input
            className="input"
            type="text"
            name="title"
            value={title}
            placeholder="Назва задачі"
            required
            onChange={handleChangeTitle}
          />
        </label>

        <label>
          <input
            className="input"
            type="number"
            name="hoursPlanned"
            value={hoursPlanned}
            placeholder="Заплановано годин"
            required
            onChange={handleHoursPlanned}
            min="0"
          />
        </label>
        <div className="submitWrapper">
          <SubmitButton nameBtn="Готово" />
        </div>
      </form>
    </WrapperForm>
  );
};

export default TaskForm;
