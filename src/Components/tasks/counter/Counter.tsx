import { useEffect, useState } from "react";
import { CounterWrapper } from "./CounterStyled";
import moment from "moment";
import { sprintInterface } from '../taskInterfaces/taskInterfaces';

interface Props {
  data: sprintInterface;
  settargetDate: any;
}

const Counter = ({ data, settargetDate }: Props) => {
  const [counter, setCounter] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState(0);
  const targetDate = moment(startDate)
    .add(counter - 1, "day")
    .format("DD MM YYYY");

  useEffect(() => {
    settargetDate(
      moment(startDate)
        .add(counter - 1, "day")
        .format("YYYY-MM-DD")
    );
  }, [counter, startDate]);

  useEffect(() => {
    if (data) {
      setStartDate(data.startDate);
      setDuration(data.duration);
    }
  }, [data]);

  const increment = () => {
    if (counter !== duration) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <CounterWrapper>
      <div className="CounterInterfaceWrapper">
        <button
          type="button"
          onClick={decrement}
          className="buttonCounter buttonCounterLeft"
        >
          &#60;
        </button>
        <p className="counterNumberContainer">
          <span className="counterDay">{counter}</span>{" "}
          <span className="counterDate">/ {duration}</span>
        </p>
        <button
          type="button"
          onClick={increment}
          className="buttonCounter buttonCounterRight"
        >
          &gt;
        </button>
      </div>

      <p className="counterDate">{targetDate}</p>
    </CounterWrapper>
  );
};

export default Counter;
