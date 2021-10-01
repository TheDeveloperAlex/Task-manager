import { ChartStyled } from './ChartStyled';
import Button from '../common/button/Button';
import buttonIcons from '../../configs/buttonIcons.json';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import taskSelectors from '../../redux/task/task-selectors';
import sprintSelectors from '../../redux/sprints/sprints-selectors';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import moment from 'moment';

interface IChartProps {
  title?: string;
  open: boolean;
  setOpen: (action: boolean) => void;
  draw: boolean;
}

interface IHoursWastedPerDay {
  currentDay: string;
  singleHoursWasted: number;
}

interface IItem {
  title: string;
  id?: string;
  _id?: string;
  hoursPlanned: number;
  hoursWasted: number;
  hoursWastedPerDay: IHoursWastedPerDay[];
}

interface ISprintsTypes {
  _id: string;
  id: string;
  title: string;
  duration: number;
  startDate: string;
}

const Chart = ({
  title = 'title',
  open,
  setOpen,
  draw = true,
}: IChartProps) => {
  const [labels, setLabels] = useState<string[]>([]);
  const sprints: ISprintsTypes[] = useSelector(sprintSelectors.getSprints);
  const tasks: IItem[] = useSelector(taskSelectors.getTasks);
  const { id }: any = useParams();
  const [planedHours, setPlanedHours] = useState<number[]>([]);
  const [realHovers, setRealHovers] = useState<number[]>([]);

  useEffect(() => {
    if (draw) {
      if (sprints.length !== 0) {
        const currentSprint = sprints.find((sprint) => {
          const sprintId = sprint._id ?? sprint.id;
          return sprintId === id;
        });
        const labelsArr: string[] = ['0'];
        const operationAmount = currentSprint?.duration ?? 0;
        for (let i = 0; i < operationAmount; i++) {
          const newLabelArrItem: string = moment(currentSprint?.startDate)
            .add(i, 'day')
            .format('YYYY-MM-DD');
          labelsArr.push(newLabelArrItem);
        }
        setLabels(labelsArr);
      }
    }
  }, [id, sprints, draw]);
  useEffect(() => {
    if (tasks.length !== 0) {
      // Planned arr hours
      let tasksTotalTime: number = 0;
      tasks.forEach((task) => (tasksTotalTime += Number(task.hoursPlanned)));
      const tasksTotalTimeArr: number[] = [Number(tasksTotalTime)];
      const dayAmount = tasks[0].hoursWastedPerDay.length;
      const substractor = tasksTotalTime / dayAmount;
      let newSubstractor = substractor;
      for (let i = 0; i < dayAmount - 1; i++) {
        tasksTotalTimeArr.push(tasksTotalTime - newSubstractor);
        newSubstractor += substractor;
      }
      tasksTotalTimeArr.push(0);
      setPlanedHours(tasksTotalTimeArr);
      // Used arr hours
      const realHourArr = [tasksTotalTime];
      for (let i = 0; i < dayAmount; i++) {
        let realHourItem = 0;
        for (let j = 0; j < tasks.length; j++) {
          realHourItem += tasks[j].hoursWastedPerDay[i].singleHoursWasted;
        }
        realHourArr.push(realHourArr[realHourArr.length - 1] - realHourItem);
      }
      setRealHovers(realHourArr);
    }
  }, [tasks]);

  interface IOnOverlayClickTypes {
    target: any;
    currentTarget: any;
  }

  const onOverlayClick = ({ target, currentTarget }: IOnOverlayClickTypes) => {
    target === currentTarget && setOpen(false);
  };
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    const body: HTMLBodyElement | null = document.querySelector('body');
    if (open) body!.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEscape);
      const body = document.querySelector('body');
      body!.style.overflow = 'auto';
    };
  });
  const handleEscape = (e: any) => e.code === 'Escape' && setOpen(false);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Використаний час',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: realHovers,
      },
      {
        label: 'Запланований час',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(150, 0, 0)',
        borderColor: 'red',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: 'red',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: planedHours,
      },
    ],
  };
  return (
    <>
      {open && (
        <ChartStyled onClick={onOverlayClick}>
          <div className="modal">
            <h3>{title}</h3>
            <div className="buttonWrapper">
              <Button
                classBtn="close"
                icon={buttonIcons.close}
                onHandleClick={() => setOpen(false)}
              />
            </div>
            <Line data={data} />
          </div>
        </ChartStyled>
      )}
    </>
  );
};

export default Chart;
