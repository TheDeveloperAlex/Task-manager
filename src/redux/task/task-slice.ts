import { createSlice } from '@reduxjs/toolkit';
import {
  addTask,
  getSprintsTasks,
  deleteSprintsTask,
  patchTaskHours,
} from './task-operations';

interface IHoursWastedPerDay {
  currentDay: string;
  singleHoursWasted: number;
}

interface IItem {
  title: string;
  id?: string;
  _id?: string;
  hoursPlanned: number;
  hoursWasted: number;
  hoursWastedPerDay: IHoursWastedPerDay[];
}

interface IInitialState {
  items: IItem[];
  error: null | string | unknown;
  loading: boolean;
}

const initialState = {
  items: [],
  error: null,
  loading: false,
} as IInitialState;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTask.fulfilled, (state, { payload }) => {
      state.error = null;
      state.items.push(payload);
      state.loading = false;
    });
    builder.addCase(addTask.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(getSprintsTasks.fulfilled, (state, { payload }) => {
      if (payload.message === 'No tasks found') {
        return initialState;
      } else if (payload.length === 0) {
        return initialState;
      } else {
        state.items = [...payload];
      }
    });
    builder.addCase(deleteSprintsTask.fulfilled, (state, { payload }) => {
      state.items = [
        ...state.items.filter((task) => {
          const taskId = task._id ?? task.id;
          return taskId !== payload;
        }),
      ];
    });
    builder.addCase(patchTaskHours.fulfilled, (state, { payload }) => {
      state.items = state.items.map((task) => {
        const taskId = task._id ?? task.id;
        if (taskId !== payload.id) {
          return task;
        }
        task.hoursWasted = payload.wastedHours;

        task.hoursWastedPerDay = task?.hoursWastedPerDay.map((itemDate) => {
          if (itemDate.currentDay === payload.currentDate) {
            return {
              currentDay: payload.currentDate,
              singleHoursWasted: (itemDate['singleHoursWasted'] =
                payload.hours),
            };
          }
          return itemDate;
        });

        return task;
      });
    });
  },
});

export default tasksSlice.reducer;
