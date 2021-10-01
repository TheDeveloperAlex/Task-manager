import Title from '../../Components/common/title/Title';
import Button from '../../Components/common/button/Button';
import { ProjectsStyled } from './ProjectsStyled';
import ProjectsList from '../../Components/projects/projectsList/ProjectsList';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { IItem } from '../../redux/projects/projects-slice';

import projectSelectors from '../../redux/projects/projects-selectors';
import { token } from '../../redux/auth/auth-operations';
import { authSelectors } from '../../redux/auth';
import CreateProject from '../../Components/projects/createProject/CreateProject';
import projectOperations from '../../redux/projects/projects-operations';


const Projects = () => {
  const isAuth = useSelector(authSelectors.getAccessToken);
  const projects: IItem[] = useSelector(projectSelectors.getProjects);
  const dispatch = useDispatch();

  const [closeModalProject, setCloseModalProject] = useState(false);

  useEffect(() => {
    token.set(isAuth);
    !projects?.length && isAuth && dispatch(projectOperations.getProjects());
  }, [dispatch, isAuth, projects?.length]);

  return (
    <ProjectsStyled>
      <div className="headerWrapper">
        <Title title="Проекти" />
        <div className="buttonWrapper">
          <Button onHandleClick={() => setCloseModalProject(true)} />
          <p className="buttonMessage">Створити проект</p>
        </div>
      </div>
      {projects && <ProjectsList projects={projects} />}
      <CreateProject
        closeModal={closeModalProject}
        setCloseModal={setCloseModalProject}
      />
    </ProjectsStyled>
  );
};

export default Projects;
