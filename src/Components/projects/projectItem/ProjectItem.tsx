import { ProjectItemStyled } from './ProjectItemStyled';
import Button from '../../common/button/Button';
import { Link } from 'react-router-dom';
import buttonIcons from '../../../configs/buttonIcons.json';
import { useDispatch } from 'react-redux';
import projectOperations from '../../../redux/projects/projects-operations';
import { IItem } from '../../../redux/projects/projects-slice';

interface IProjectItemState {
  project: IItem;
  background?: string;
}

const ProjectItem = ({ project, background }: IProjectItemState) => {
  const dispatch = useDispatch();

  const deleteProject = () => {
    dispatch(projectOperations.deleteProject(project._id ?? project.id));
  };

  return (
    <ProjectItemStyled className={`${background}`}>
      <Link
        to={`/project/${project._id ?? project.id}`}
        className={` projectLink`}
      >
        <h3 className="projectTitle">{project.title}</h3>
        <div className="projectTextWrapper">
          <p className="projectTextDescription">{project.description}</p>
        </div>
      </Link>
      <div className="projectButtonWrapper">
        <Button
          classBtn="deleteProject"
          icon={buttonIcons.delete}
          onHandleClick={deleteProject}
          background={background}
        />
      </div>
    </ProjectItemStyled>
  );
};

export default ProjectItem;
