import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOGOUT,
} from "../type";

const user = JSON.parse(localStorage.getItem("userInfo"));

let globalState = user
  ? { isLoggedIn: true, userData: user }
  : { isLoggedIn: false, userData: null };

export const userReducers = (state = globalState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("LOGIN REQUEST: ", state);
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      console.log("LOGIN SUCCESS: ", state);
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        userData: action.payload.data,
      };
    case LOGIN_FAILED:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { ...state, isLoggedIn: false };

    default:
      return state;
  }
};
