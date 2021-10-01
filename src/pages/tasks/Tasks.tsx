import Chart from '../../Components/chart/Chart';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import Button from '../../Components/common/button/Button';
import TaskList from '../../Components/tasks/taskList/TaskList';
import Title from '../../Components/common/title/Title';
import Counter from '../../Components/tasks/counter/Counter';
import ContentContainer from '../../Components/common/containers/contentContainer/ContentContainer';
import { TasksStyled } from './TasksStyled';
import 'material-icons/iconfont/material-icons.css';
import NavMenu from '../../Components/navMenu/NavMenu';
import NavContainer from '../../Components/common/containers/navContainer/NavContainer';
import CreateProject from '../../Components/projects/createProject/CreateProject';
import CreateTask from '../../Components/tasks/createTask/CreateTask';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { token } from '../../redux/auth/auth-operations';
import { authSelectors } from '../../redux/auth';
import { getProjectsSprints } from '../../redux/sprints/sprints-operations';
import projectOperations from '../../redux/projects/projects-operations';
import sprintSelectors from '../../redux/sprints/sprints-selectors';
import projectSelectors from '../../redux/projects/projects-selectors';
import taskSelectors from '../../redux/task/task-selectors';
import { patchTitleSprint } from '../../redux/task/task-operations';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';

interface sprintNameInterface {
  id: string;
  title: string;
}

// interface ITargetDate {
// let targetDate: string;
// let settargetDate: any;
// }

const Tasks = () => {
  const [filterText, setfilterText] = useState('');
  const [sprintName, setSprintName] = useState('');
  const [open, setOpen] = useState(false);
  const [closeModalTask, setCloseModalTask] = useState(false);
  const [targetDate, settargetDate] = useState('');
  const [sprint, setSprint]: any = useState(null);
  const [draw, setDraw] = useState(false);

  const [tasksCounter, setTasksCounter] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const isAuth = useSelector(authSelectors.getAccessToken);
  const sprintsArr = useSelector(taskSelectors.getTasks);
  const sprints = useSelector(sprintSelectors.getSprints);
  const projects = useSelector(projectSelectors.getProjects);

  const location = useLocation();
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');

  const editNameHandle = async () => {
    await setShowInput(true);
    const inputChangeTitle: any | null =
      document.querySelector('#inputChangeTitle');
    inputChangeTitle!.focus();
  };

  useEffect(() => {
    if (sprint !== null) {
      setTitle(sprint.title);
    }
  }, [sprint]);

  const changeTitleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (sprintName !== title || title !== '') {
      const obj: sprintNameInterface = {
        id,
        title,
      };
      dispatch(patchTitleSprint(obj));
    }
    setShowInput(false);
  };

  const changeTitleClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (sprintName !== title || title !== '') {
      const obj: sprintNameInterface = {
        id,
        title,
      };
      dispatch(patchTitleSprint(obj));
    }
    setShowInput(false);
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const Sprint = sprints.filter((sprint) => {
    const sprintId = sprint._id ?? sprint.id;
    return sprintId === id;
  });
  useEffect(() => {
    if (projects.length !== 0) {
      const project = projects.find((item) => {
        const itemId = item.id ?? item._id;
        const projectId = location.pathname.split('/')[2];
        return itemId === projectId;
      });
      if (project === undefined) {
        setRedirect(true);
        toast.warning('Ви не є учасником цього проекту!');
      }
    }
  }, [projects]);

  useEffect(() => {
    token.set(isAuth);
    dispatch(projectOperations.getProjects());
    const projectId = location.pathname.split('/')[2];
    isAuth && dispatch(getProjectsSprints(projectId));
  }, [dispatch, id, isAuth, location.pathname]);
  useEffect(() => {
    if (sprints.length !== 0) {
      const sprint = sprints.find((item) => {
        const itemId = item.id ?? item._id;
        return itemId === id;
      });
      if (sprint === undefined) {
        setRedirect(true);
        toast.warning('Ви не є учасником цього проекту!');
      } else {
        setDraw(true);
      }
    }
  }, [sprints]);

  useEffect(() => {
    if (Sprint.length !== 0) {
      setSprint(Sprint[0]);
      setSprintName(Sprint[0].title);
    }
  }, [Sprint, sprints]);

  useEffect(() => {
    if (sprintsArr.length !== 0) {
      setTasksCounter(sprintsArr.length);
    } else {
      setTasksCounter(0);
    }
  }, [sprintsArr]);

  const projectId = location.pathname.split('/')[2];
  const filterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const Filter = text.toLowerCase();
    setfilterText(Filter);
  };

  return (
    <>
      {redirect ? (
        <Redirect to="/" />
      ) : (
        <>
          <NavContainer>
            <NavMenu
              title="спринти"
              list={sprints}
              path={`project/${projectId}/sprint`}
              linkTo={`/project/${projectId}`}
            />
          </NavContainer>
          <TasksStyled>
            <div className="TaskInterfaceContainer">
              <div>
                <div className="counterSearchContainer">
                  <Counter data={sprint} settargetDate={settargetDate} />
                  <div className="inputBox">
                    <span className="material-icons iconSearch">search</span>
                    <span className="material-icons iconSearchTablet">
                      search
                    </span>
                    <input
                      type="text"
                      onChange={filterChange}
                      className="inputSearch"
                    />
                  </div>
                </div>
                <div>
                  <div className="TaskWrapper">
                    {!showInput && (
                      <div className="SprintTitleBtnEditWrapper">
                        <div className="TaskTitleBtnEditWrapper">
                          <div className="TaskTitleWrapper">
                            <Title title={sprintName} />
                          </div>
                          {/* <div className="TaskTitleWrapper"></div> */}
                          <div className="btnEditTitle">
                            <Button
                              icon="edit"
                              classBtn="editDelete"
                              onHandleClick={editNameHandle}
                            />
                          </div>
                        </div>

                        <div className="btnCreateTaskTablet ">
                          <div className="btnCreateSprintTitle openModalTask btnEdit">
                            <Button
                              onHandleClick={() => setCloseModalTask(true)}
                            />
                          </div>
                          <p className="AddTaskParagraph">Створити задачу</p>
                        </div>
                      </div>
                    )}
                    {showInput && (
                      <form
                        onSubmit={changeTitleSubmit}
                        className={
                          showInput
                            ? 'changeTitleFormActive'
                            : 'changeTitleForm'
                        }
                      >
                        <input
                          className="inputChangeTitle"
                          value={title}
                          name="newTitle"
                          type="text"
                          onChange={onHandleChange}
                          id="inputChangeTitle"
                        />
                        <Button
                          icon="edit"
                          classBtn="editDelete"
                          onHandleClick={changeTitleClickSubmit}
                        />
                      </form>
                    )}
                    <div className="btnCreateTask ">
                      <Button onHandleClick={() => setCloseModalTask(true)} />
                    </div>
                  </div>

                  {/* <div className="discrbtionHoursContainer">
                    <p className="discrbtionHours">Заплановано годин</p>
                    <p className="discrbtionHours">Витрачено год / день</p>
                    <p className="discrbtionHours">Витрачено годин</p>
                  </div> */}
                  <div className="discrbtionHoursContainerDesktop">
                    <div className="discrbtionHoursContainerDesktopHours">
                      <p className="discrbtionHours">Задача</p>
                      <p className="discrbtionHours">Заплановано годин</p>
                      <p className="discrbtionHours">Витрачено год / день</p>
                      <p className="discrbtionHours">Витрачено годин</p>
                    </div>

                    <div className="SearchDesktop">
                      <span className="material-icons iconSearchDesktop">
                        search
                      </span>
                      <input
                        type="text"
                        onChange={filterChange}
                        className="inputSearchDesktop"
                      />
                    </div>
                  </div>
                  <div className="discrbtionHoursContainerAfter"></div>
                  <div className="btnEditTitleAfter"></div>
                  <div>
                    {tasksCounter > 2 && (
                      <>
                        <div className="btnAddchartTitle">
                          <Button
                            icon="addchart"
                            onHandleClick={() => setOpen(true)}
                          />
                        </div>
                        <div className="btnAddchartTitleTablet">
                          <Button
                            icon="addchart"
                            onHandleClick={() => setOpen(true)}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* <div className="discrbtionHoursContainer">
                <p className="discrbtionHours">Заплановано годин</p>
                <p className="discrbtionHours">Витрачено год / день</p>
                <p className="discrbtionHours">Витрачено годин</p>
              </div>
              <div className="discrbtionHoursContainerDesktop">
                <p className="discrbtionHours">Задача</p>
                <p className="discrbtionHours">Заплановано годин</p>
                <p className="discrbtionHours">Витрачено год / день</p>
                <p className="discrbtionHours">Витрачено годин</p>
                <div className="SearchDesktop">
                  <span className="material-icons iconSearchDesktop">
                    search
                  </span>
                  <input
                    type="text"
                    onChange={filterChange}
                    className="inputSearchDesktop"
                  />
                </div>
              </div> */}
              {/* <ContentContainer> */}
              <div className="TaskListMaimContainner">
                <TaskList filter={filterText} targetDate={targetDate} />
              </div>
              {/* </ContentContainer> */}
            </div>
          </TasksStyled>

          <Chart
            open={open}
            setOpen={() => setOpen(false)}
            draw={draw}
            title={title}
          />

          <CreateTask
            closeModal={closeModalTask}
            setCloseModal={setCloseModalTask}
          />
        </>
      )}
    </>
  );
};

export default Tasks;
