import Button from "../../common/button/Button";
import buttonIcons from "../../../configs/buttonIcons.json";
import { Link } from "react-router-dom";
import { SprintListItemStyled } from "./SprintListItemStyled";
import { useDispatch } from "react-redux";
import { deleteSprint } from "../../../redux/sprints/sprints-operations";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/uk";

interface Props{
  sprint: {
    startDate: string;
    endDate: string;
    _id: string;
    id: string;
    title: string;
    duration: number;
  };
}

interface IId{
  id: string;
}

const SprintListItem = ({ sprint }:Props) => {
  moment.locale("uk");
  const startFormatDate = moment(sprint.startDate).format("D MMM");
  const endFormatDate = moment(sprint.endDate).format("D MMM");
  const { id}:IId = useParams();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteSprint(sprint.id ?? sprint._id));
  };

  return (
    <SprintListItemStyled>
      <div className="LinkWrapper">
        <Link to={`/project/${id}/sprint/${sprint._id ?? sprint.id}`}>
          <div className="itemWrap">
            <h3>{sprint.title}</h3>

            <ul>
              <li>
                <span className="date">Дата початку</span>
                <span>{startFormatDate}</span>
              </li>
              <li>
                <span className="date">Дата закінчення</span>
                <span>{endFormatDate}</span>
              </li>
              <li>
                <span>Тривалість</span>
                <span>{sprint.duration}</span>
              </li>
            </ul>
          </div>
        </Link>
        <Button
          icon={buttonIcons.delete}
          classBtn="delete"
          title="Edit the name"
          type="button"
          className="deleteBtn"
          onHandleClick={handleClick}
        ></Button>
      </div>
    </SprintListItemStyled>
  );
};

export default SprintListItem;
