import {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  configureStore,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import { error } from './error/error-reducer';
import projects from './projects/projects-slice';
import sprints from './sprints/sprints-slice';
import tasks from './task/task-slice';
import { IAuthInitialState } from '../redux/interfaces/interfacesStore';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken', 'sid', 'isLoggedIn', 'user'],
};

// interface IStore {
//   auth: IAuthInitialState;
//   error: { a: string, b: string } | null;
//   projects: { items: object[]; loading: boolean };
//   sprints: {
//   items: object[],
//   error: { a: string, b: string } | null,
//   loading: boolean,
// };
//   tasks: {
//     items: object[],
//     error: { a: string, b: string } | null,
//     loading: boolean,
//   }
// }

// declare module "@reduxjs/toolkit" {
//   type AsyncThunkConfig = {
//     state?: unknown;
//     // dispatch?: Dispatch;
//     extra?: unknown;
//     rejectValue?: unknown;
//     serializedErrorType?: unknown;
//   };

//   function createAsyncThunk<
//     Returned,
//     ThunkArg = void,
//     ThunkApiConfig extends AsyncThunkConfig = {
//       state: IStore;
//     }
//   >(
//     typePrefix: string,
//     payloadCreator: AsyncThunkPayloadCreator<
//       Returned,
//       ThunkArg,
//       ThunkApiConfig
//     >,
//     options?: any
//   ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
// }

type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    auth: persistReducer<IAuthInitialState>(authPersistConfig, authReducer),
    error,
    projects,
    sprints,
    tasks,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default RootState;

export type AppDispatch = typeof store.dispatch;
