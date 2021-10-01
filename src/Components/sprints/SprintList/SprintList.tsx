import SprintListItem from "../SprintListItem/SprintListItem"
import { SprintListStyled } from "./SprintListStyled"

type ListId = {
  startDate: string;
    endDate: string;
    _id: string;
    id: string;
    title: string;
    duration: number;
}

interface Props{
  sprints: ListId[];
  
}

const SprintList = ({ sprints }:Props) => {
  return (
    <>
      <SprintListStyled>
        {sprints.length === 0 ? (
          <p className="listWrapper">Створіть ваш перший спринт</p>
        ) : (
          <ul className="listWrapper">
            {sprints &&
              sprints.map((sprint) => (
                <li key={sprint.id ?? sprint._id} className="listItem">
                  <SprintListItem sprint={sprint} />
                </li>
              ))}
          </ul>
        )}
      </SprintListStyled>
    </>
  )
}

export default SprintList
