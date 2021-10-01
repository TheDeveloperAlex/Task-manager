import RootState from '../store';

const getSprints = (state: RootState) => state.sprints.items;

const sprintSelectors = {
  getSprints,
};
export default sprintSelectors;
