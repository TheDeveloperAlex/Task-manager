import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getError } from '../error/error-handler';

interface IPostProjectCredentials {
  title: string;
  description: string;
}

interface IProjectCurrentData {
  title: string;
  description: string;
  members: string[];
  sprints: string[];
  id: string;
}

interface IPostProjectData {
  data: IProjectCurrentData;
}

const postProject = createAsyncThunk(
  'postProject/project',
  async (
    credentials: IPostProjectCredentials,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { data }: IPostProjectData = await axios.post(
        '/project',
        credentials
      );
      return data;
    } catch (error: any) {
      dispatch(
        getError({
          error,
          cb: () => postProject(credentials),
          operationType: 'postProject/project',
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

const deleteProject = createAsyncThunk(
  'deleteProject/project',
  async (id: string, { dispatch, rejectWithValue }) => {
    try {
      await axios.delete(`/project/${id}`);
      return id;
    } catch (error: any) {
      dispatch(
        getError({
          error,
          cb: () => deleteProject(id),
          operationType: 'deleteProject/project',
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

type TEmail = { email: string };

interface IAddMemberData {
  id: string;
  email: string | TEmail;
}

const addMember = createAsyncThunk(
  'member/addMember',
  async ({ id, email }: IAddMemberData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.patch(`/project/contributor/${id}`, email);
      return { data, id };
    } catch (error: any) {
      dispatch(
        getError({
          error,
          cb: () => addMember({ id, email }),
          operationType: 'member/addMember',
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

const getProjects = createAsyncThunk(
  'getProject/project',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get('/project');
      return data;
    } catch (error: any) {
      dispatch(
        getError({
          error,
          cb: () => getProjects(),
          operationType: 'getProject/project',
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

interface IUpdateProjectTitleData {
  id: string;
  title: string;
}

export const updateProjectTitle = createAsyncThunk(
  'updateProjectTitle/projectId',
  async (Data: IUpdateProjectTitleData, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `/project/title/${Data.id}`,
        Data.title
      );
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

const projectOperations = {
  postProject,
  getProjects,
  deleteProject,
  addMember,
  updateProjectTitle,
};
export default projectOperations;
