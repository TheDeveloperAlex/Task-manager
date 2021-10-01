import { ProjectsListStyled } from './ProjectsListStyled';
import ProjectItem from '../projectItem/ProjectItem';
import { randomBackgroud } from '../../../helpers/randomBackground';
import { colors } from '../../../configs/background.json';
import { IItem } from '../../../redux/projects/projects-slice';

interface IProjectState {
  projects: IItem[];
}

const ProjectsList = ({ projects }: IProjectState) => {
  return (
    <ProjectsListStyled>
      {projects.map((item) => (
        <ProjectItem
          key={item._id ?? item.id}
          project={item}
          background={randomBackgroud(colors)}
        />
      ))}
    </ProjectsListStyled>
  );
};

export default ProjectsList;
