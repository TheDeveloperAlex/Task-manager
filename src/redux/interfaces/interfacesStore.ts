export interface ISubmitData {
  id: string | null;
  email: string | null;
};

export type TToken = string | null;
export type TRefreshToken = string | null;
export type TSid = string | null;
export type TIsLoggedIn = boolean;
export type TOperation = string;

export interface IAuthInitialState {
  user: ISubmitData;
  token: TToken;
  refreshToken: TRefreshToken;
  sid: TSid;
  isLoggedIn: TIsLoggedIn;
  isFetchingCurrentUser: TIsLoggedIn,
}

export interface IAuthData {
  data: ISubmitData;
  accessToken: TToken;
  refreshToken: TRefreshToken;
  sid: TSid;
  isLoggedIn: TIsLoggedIn;
}

export interface IAuthNewData {
  newAccessToken: TToken;
  newRefreshToken: TRefreshToken;
  newSid: TSid;
  isLoggedIn: TIsLoggedIn;
}

export interface IIsFetching {
  isFetchingCurrentUser:TIsLoggedIn
}