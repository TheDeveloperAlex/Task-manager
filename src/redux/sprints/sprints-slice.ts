import { createSlice } from '@reduxjs/toolkit';
import { patchTitleSprint } from '../task/task-operations';
import {
  addSprint,
  deleteSprint,
  getProjectsSprints,
} from './sprints-operations';

interface ISprint {
  _id: string;
  id: string;
  title: string;
  duration: number;
  startDate: string;
}

interface IInitialState {
  items: ISprint[];
  error: null | string;
  loading: boolean;
}

const initialState = {
  items: [],
  error: null,
  loading: false,
} as IInitialState;

const sprintsSlice = createSlice({
  name: 'sprints',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addSprint.fulfilled, (state, { payload }) => {
      state.error = null;
      state.items.push(payload);
      state.loading = false;
    });
    builder.addCase(getProjectsSprints.fulfilled, (_, { payload }) => {
      if (payload.message === 'No sprints found') return initialState;
      return {
        error: null,
        items: [...payload.sprints],
        loading: false,
      };
    });

    builder.addCase(deleteSprint.fulfilled, (state, { payload }) => {
      state.items = [
        ...state.items.filter((item) => {
          const itemId = item._id ?? item.id;
          return itemId !== payload;
        }),
      ];
    });
    builder.addCase(patchTitleSprint.fulfilled, (state, { payload }) => {
      state.items = state.items.map((sprint) => {
        const sprintId = sprint._id ?? sprint.id;
        if (sprintId === payload.id) {
          sprint.title = payload.title.newTitle;
        }
        return sprint;
      });
    });
  },
});

export default sprintsSlice.reducer;
