import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addSprint } from '../../../redux/sprints/sprints-operations';
import SubmitButton from '../../common/submitButton/SubmitButton';
import { WrapperForm } from './CreateSprintFormStyled';
import moment from 'moment';
import { useLocation } from 'react-router';

interface Props {
  setOpenModal: (active: boolean) => void;
}
type TName = string;
type TDuration = number;
type TisActivelastDate = undefined | Date;

const CreateSprintForm = ({ setOpenModal }: Props) => {
  const [name, setName] = useState<TName>('');
  const [duration, setDuration] = useState<TDuration | string>('');
  const [isActivelastDate, setIsActiveLastDate] = useState<TisActivelastDate>(
    new Date()
  );
  const location = useLocation();
  const projectId: string = location.pathname.split('/')[2];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'duration':
        setDuration(value);
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formatDate = moment(startDate).format('YYYY-M-D');
    dispatch(
      addSprint({
        projectId,
        sprintData: {
          title: name,
          endDate: formatDate,
          duration,
        },
      })
    );
    setOpenModal(false);
    setName('');
  };
  const changeActiveDate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isActivelastDate !== undefined) {
      setIsActiveLastDate(undefined);
    } else {
      setIsActiveLastDate(new Date());
    }
  };
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <WrapperForm>
      <form className="form" onSubmit={onHandleSubmit}>
        <label>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            placeholder="Назва спринта"
            required
            onChange={handleChange}
          />
        </label>
        <button
          onClick={changeActiveDate}
          type="button"
          className="round__wrapper"
        >
          <span className="round">
            {!isActivelastDate && <span className="orange"></span>}
          </span>
          Попередні дні
        </button>
        <div className="date__wrapper">
          <label className="dateLabel">
            Дата закінчення
            <DatePicker
              popperPlacement="bottom"
              className="date"
              name="date"
              selected={startDate}
              onChange={(date: Date) => setStartDate(date!)}
              minDate={isActivelastDate}
            />
          </label>
          <label>
            <input
              className="input duration"
              type="number"
              name="duration"
              value={duration}
              placeholder="Тривалість"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="submitWrapper">
          <SubmitButton className="submit" nameBtn="Готово" />
        </div>
      </form>
    </WrapperForm>
  );
};

export default CreateSprintForm;
