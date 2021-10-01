import { createAsyncThunk } from '@reduxjs/toolkit';
import { authOperations } from '../auth';

interface IErrorData {
  status: string;
  message: string;
}

interface IReturnError {
  status: number;
  message: string;
}

interface IErrorWithStatus {
  (error: IErrorData): IReturnError;
}

const getErrorWithStatus: IErrorWithStatus = (error) => {
  const status = +error.message.slice(-3);
  return { status, message: error.message };
};

interface IGetError {
  error: IErrorData;
  cb: () => any;
  operationType: string;
}

export const getError =
  ({ error, cb, operationType }: IGetError) =>
  (dispatch: any) => {
    const operation = createAsyncThunk(
      operationType,
      async (_, { rejectWithValue, dispatch }) => {
        const { status, message } = getErrorWithStatus(error);
        if (status === 401) {
          dispatch(authOperations.refreshToken(cb));
        }
        return rejectWithValue({ status, message });
      }
    );
    dispatch(operation());
  };
