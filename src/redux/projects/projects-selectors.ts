import RootState from '../store';

const getProjects = (state: RootState) => state.projects.items;

const projectSelectors = {
  getProjects,
};
export default projectSelectors;
