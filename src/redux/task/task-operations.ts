import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getError } from '../error/error-handler';

interface IAddTaskProps {
  sprintId: string;
  task: object;
}

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

interface IAddTaskReturnResponce {
  data: IItem;
}

export const addTask = createAsyncThunk(
  'task/addTask',
  async ({ sprintId, task }: IAddTaskProps, { dispatch, rejectWithValue }) => {
    try {
      const data: IAddTaskReturnResponce = await axios.post(
        `/task/${sprintId}`,
        task
      );
      return data.data;
    } catch (error: any) {
      dispatch(
        getError({
          error,
          cb: () => addTask({ sprintId, task }),
          operationType: 'sprint/addSprint',
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

// interface IGetSprintsTasks {
//   data?: IItem[];
//   message?: string;
// }

export const getSprintsTasks = createAsyncThunk(
  'task/getTAsks',

  async (sprintId: string, { dispatch, rejectWithValue }) => {
    try {
      const data = await axios.get(`/task/${sprintId}`);
      const returnedData: any = data.data;
      return returnedData;
    } catch (error: any) {
      dispatch(
        getError({
          error,
          cb: () => getSprintsTasks(sprintId),
          operationType: 'task/getTAsks',
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const deleteSprintsTask = createAsyncThunk(
  'task/deleteTask',
  async (taskId: string, { rejectWithValue }) => {
    try {
      await axios.delete(`/task/${taskId}`);
      return taskId;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface IPatchTaskHours {
  sprintId: string;
  taskObj: object;
}

export const patchTaskHours = createAsyncThunk(
  'task/patchTaskHours',
  async (data: IPatchTaskHours, { getState, rejectWithValue }) => {
    const state = getState();
    try {
      const response = await axios.patch(
        `/task/${data.sprintId}`,
        data.taskObj
      );

      const responseObj = {
        date: response.data.day,
        currentDate: response.data.day.currentDay,
        hours: response.data.day.singleHoursWasted,
        wastedHours: response.data.newWastedHours,
        id: data.sprintId,
      };

      return responseObj;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface IPatchTitleSprint {
  id: string;
  title: string;
}

export const patchTitleSprint = createAsyncThunk(
  'task/patchTitleSprint',
  async (Data: IPatchTitleSprint, { rejectWithValue }) => {
    // console.log(Data);
    try {
      const { data } = await axios.patch(`/sprint/title/${Data.id}`, {
        title: Data.title,
      });

      const response = {
        id: Data.id,
        title: data,
      };

      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
