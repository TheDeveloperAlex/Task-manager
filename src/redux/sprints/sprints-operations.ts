import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getError } from '../error/error-handler';

interface IprojectId {
  projectId: string;
  sprintData: {
    title: string;
    endDate: string | Date;
    duration: string | number;
  };
}

export const addSprint = createAsyncThunk(
  'sprint/addSprint',
  async (
    { projectId, sprintData }: IprojectId,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post(`/sprint/${projectId}`, sprintData);
      return data;
    } catch (error: any) {
      dispatch(
        getError({
          error,
          cb: () => addSprint({ projectId, sprintData }),
          operationType: 'sprint/addSprint',
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const getProjectsSprints = createAsyncThunk(
  'sprint/getSprints',
  async (projectId: string, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/sprint/${projectId}`);
      return data;
    } catch (error: any) {
      dispatch(
        getError({
          error,
          cb: () => getProjectsSprints(projectId),
          operationType: 'sprint/getSprints',
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const changeSprintsTitle = createAsyncThunk(
  'sprint/changeTitle',
  async (sprintId: string, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.patch(sprintId);
      return data;
    } catch (error: any) {
      dispatch(
        getError({
          error,
          cb: () => changeSprintsTitle(sprintId),
          operationType: 'sprint/changeTitle',
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const deleteSprint = createAsyncThunk(
  'sprint/deleteSprint',
  async (sprintId: string, { dispatch, rejectWithValue }) => {
    try {
      await axios.delete(`/sprint/${sprintId}`);
      return sprintId;
    } catch (error: any) {
      dispatch(
        getError({
          error,
          cb: () => deleteSprint(sprintId),
          operationType: 'sprint/deleteSprint',
        })
      );
      return rejectWithValue(error.message);
    }
  }
);
