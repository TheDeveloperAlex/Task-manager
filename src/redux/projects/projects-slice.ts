import { createSlice } from '@reduxjs/toolkit';
import projectOperations, { updateProjectTitle } from './projects-operations';

export interface IItem {
  _id?: string;
  id: string;
  title: string;
  description: string;
  members: string[];
  sprints: string[];
  __v?: number;
}

interface ProjectState {
  items: IItem[];
  isLoading: boolean;
}

const initialState = {
  items: [],
  isLoading: false,
} as ProjectState;

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    projectLogOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(
      projectOperations.getProjects.fulfilled,
      (state, { payload }) => {
        if (payload.message === 'No projects found') return initialState;
        state.items = [...payload];
      }
    );
    builder.addCase(
      projectOperations.postProject.fulfilled,
      (state, { payload }) => {
        state.items.push(payload);
      }
    );
    builder.addCase(
      projectOperations.deleteProject.fulfilled,
      (state, { payload }) => {
        state.items = [
          ...state.items.filter((item) => {
            const itemId = item._id ?? item.id;
            return itemId !== payload;
          }),
        ];
      }
    );
    builder.addCase(
      projectOperations.addMember.fulfilled,
      (state, { payload }) => {
        const currentProject = state.items.filter((item) => {
          const itemId = item._id ?? item.id;
          return itemId === payload.id;
        });
        const idx = state.items.indexOf(currentProject[0]);
        state.items[idx].members = [...payload.data.newMembers];
      }
    );
    builder.addCase(updateProjectTitle.fulfilled, (state, { payload }) => {
      state.items = state.items.map((project) => {
        const projectId = project._id ?? project.id;
        if (projectId === payload.id) {
          project.title = payload.title.newTitle;
        }
        return project;
      });
    });
  },
});

export const { projectLogOut } = projectsSlice.actions;
export default projectsSlice.reducer;
