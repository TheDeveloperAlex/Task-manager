
import RootState from "../store"

const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn

const getUserEmail = (state: RootState) => state.auth.user.email

const getIsFetchingCurrent = (state: RootState) => state.auth.isFetchingCurrentUser

const getAccessToken = (state: RootState) => state.auth.token

const getSid = (state: RootState) => state.auth.sid



const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrent,
  getAccessToken,
  getSid,
}
export default authSelectors
