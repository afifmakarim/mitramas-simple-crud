import Api from "../../config/Api";
import {
  DATA_LIST_FAILED,
  DATA_LIST_REQUEST,
  DATA_LIST_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_LOGOUT,
  DATA_CREATE_FAIL,
  DATA_CREATE_REQUEST,
  DATA_CREATE_RESET,
  DATA_CREATE_SUCCESS,
  DATA_EDIT_FAIL,
  DATA_EDIT_REQUEST,
  DATA_EDIT_SUCCESS,
  DATA_DELETE_FAIL,
  DATA_DELETE_REQUEST,
  DATA_DELETE_SUCCESS,
} from "../type";

export const fetchData =
  ({ token }) =>
  async (dispatch) => {
    try {
      dispatch({ type: DATA_LIST_REQUEST });
      console.log("token ", token);

      const { data } = await Api.get("/customers", {
        headers: { "Content-Type": "application/json", Authorization: token },
      });

      dispatch({
        type: DATA_LIST_SUCCESS,
        payload: {
          data,
        },
      });
    } catch (error) {
      dispatch({
        type: DATA_LIST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const fetchLogin = (payload) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await Api.post("/auth/login", payload, {
      headers: { "Content-Type": "application/json" },
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        data,
      },
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const addNewData = (token, payload) => async (dispatch) => {
  try {
    dispatch({ type: DATA_CREATE_REQUEST });

    const { data } = await Api.post("/customers", payload, {
      headers: { "Content-Type": "application/json", Authorization: token },
    });

    dispatch({
      type: DATA_CREATE_SUCCESS,
      payload: {
        data,
      },
    });
  } catch (error) {
    dispatch({
      type: DATA_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editData = (token, payload) => async (dispatch) => {
  try {
    dispatch({ type: DATA_EDIT_REQUEST });

    const { data } = await Api.put("/customers", payload, {
      headers: { "Content-Type": "application/json", Authorization: token },
    });

    dispatch({
      type: DATA_EDIT_SUCCESS,
      payload: {
        data,
      },
    });
  } catch (error) {
    dispatch({
      type: DATA_EDIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteData = (token, payload) => async (dispatch) => {
  try {
    console.log(token);
    console.log(payload);

    dispatch({ type: DATA_DELETE_REQUEST });

    const { data } = await Api.delete("/customers", {
      data: { id: payload.id },
      headers: { Authorization: token },
    });

    console.log(data);
    dispatch({
      type: DATA_DELETE_SUCCESS,
      payload: {
        data,
      },
    });
  } catch (error) {
    dispatch({
      type: DATA_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
