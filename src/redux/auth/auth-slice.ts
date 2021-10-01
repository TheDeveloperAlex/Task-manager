import { createSlice, PayloadAction  } from "@reduxjs/toolkit"
import { IAuthInitialState } from "../interfaces/interfacesStore";
import authOperations from "./auth-operations"

// interface ISubmitData {
//   id: string | null;
//   email: string | null;
// };

// type TToken = string | null;
// type TRefreshToken = string | null;
// type TSid = string | null;
// type TIsLoggedIn = boolean;
// type TOperation = string;

// export interface IAuthInitialState {
//   user: ISubmitData;
//   token: TToken;
//   refreshToken: TRefreshToken;
//   sid: TSid;
//   isLoggedIn: TIsLoggedIn;
//   isFetchingCurrentUser: TIsLoggedIn,
// }

// interface IAuthData {
//   data: ISubmitData;
//   accessToken: TToken;
//   refreshToken: TRefreshToken;
//   sid: TSid;
//   isLoggedIn: TIsLoggedIn;
// }

// interface IAuthNewData {
//   newAccessToken: TToken;
//   newRefreshToken: TRefreshToken;
//   newSid: TSid;
//   isLoggedIn: TIsLoggedIn;
// }

// interface IIsFetching {
//   isFetchingCurrentUser:TIsLoggedIn
// }



const initialState: IAuthInitialState = {
  user: { id: null, email: null },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    projectRejected: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(authOperations.logIn.fulfilled, (state, action) => {

      // [authOperations.logIn.fulfilled](state: IAuthInitialState, action: PayloadAction<IAuthData>) {
      state.user.id = action.payload.data.id
      state.user.email = action.payload.data.email
      state.token = action.payload.accessToken
      state.sid = action.payload.sid
      state.refreshToken = action.payload.refreshToken
      state.isLoggedIn = true
    });
    builder.addCase(authOperations.logOut.fulfilled, (state, action) => {
      // [authOperations.logOut.fulfilled.toString()](state: IAuthInitialState, action: PayloadAction<IAuthData>) {
      state.user = { id: null, email: null }
      state.token = null
      state.refreshToken = null
      state.isLoggedIn = false
      state.sid = null
    });
    builder.addCase(authOperations.refreshToken.pending, (state, action) => {
      // [authOperations.refreshToken.pending](state: IIsFetching, action: PayloadAction<TIsLoggedIn>) {
      state.isFetchingCurrentUser = true;
    });
    builder.addCase(authOperations.refreshToken.rejected, (state, action) => {
      // [authOperations.refreshToken.rejected](state: IIsFetching, action: PayloadAction<TIsLoggedIn>) {
      state.isFetchingCurrentUser = false;
    });
    builder.addCase(authOperations.refreshToken.fulfilled, (state, action) => {
      // [authOperations.refreshToken.fulfilled](state: IAuthInitialState, action: PayloadAction<IAuthNewData>) {
      state.token = action.payload.newAccessToken
      state.refreshToken = action.payload.newRefreshToken
      state.sid = action.payload.newSid
      state.isLoggedIn = true
      state.isFetchingCurrentUser = false
    });
  },
})

export const { projectRejected } = authSlice.actions
export default authSlice.reducer
