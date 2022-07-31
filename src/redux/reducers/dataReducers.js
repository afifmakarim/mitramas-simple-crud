import {
  DATA_LIST_FAILED,
  DATA_LIST_REQUEST,
  DATA_LIST_SUCCESS,
  DATA_CREATE_FAIL,
  DATA_CREATE_REQUEST,
  DATA_CREATE_RESET,
  DATA_CREATE_SUCCESS,
  DATA_EDIT_REQUEST,
  DATA_EDIT_FAIL,
  DATA_EDIT_RESET,
  DATA_EDIT_SUCCESS,
  DATA_DELETE_FAIL,
  DATA_DELETE_REQUEST,
  DATA_DELETE_SUCCESS,
  DATA_DELETE_RESET,
} from "../type";

let globalState = {
  dataItems: [],
  addDataItems: [],
  editDataItems: [],
  deleteDataItems: [],
  isLoading: false,
  error: false,
};

export const dataReducers = (state = globalState, action) => {
  switch (action.type) {
    case DATA_LIST_REQUEST:
      //console.log("DATA REQUEST: ", state);

      return {
        ...state,
        isLoading: true,
      };
    case DATA_LIST_SUCCESS:
      ///console.log("data success: ", state);

      return {
        ...state,
        isLoading: false,
        dataItems: action.payload.data.data,
        error: false,
      };
    case DATA_LIST_FAILED:
      return { loading: false, error: true };
    default:
      return state;
  }
};

export const addNewDataReducers = (state = globalState, action) => {
  switch (action.type) {
    case DATA_CREATE_REQUEST:
      console.log("DATA_CREATE_REQUEST:", state);

      return { ...state, isLoading: true };
    case DATA_CREATE_SUCCESS:
      console.log("DATA_CREATE_SUCCESS:", state);

      return { ...state, isLoading: false, addDataItems: action.payload.data };
    case DATA_CREATE_FAIL:
      return { ...state, isLoading: false, error: true };
    case DATA_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const editDataReducers = (state = globalState, action) => {
  switch (action.type) {
    case DATA_EDIT_REQUEST:
      console.log("DATA_EDIT_REQUEST:", state);

      return { ...state, isLoading: true };
    case DATA_EDIT_SUCCESS:
      console.log("DATA_EDIT_SUCCESS:", state);

      return { ...state, isLoading: false, editDataItems: action.payload.data };
    case DATA_EDIT_FAIL:
      return { ...state, isLoading: false, error: true };
    case DATA_EDIT_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteDataReducers = (state = globalState, action) => {
  switch (action.type) {
    case DATA_DELETE_REQUEST:
      console.log("DATA_DELETE_REQUEST:", state);

      return { ...state, isLoading: true };
    case DATA_DELETE_SUCCESS:
      console.log("DATA_DELETE_SUCCESS:", state);

      return {
        ...state,
        isLoading: false,
        deleteDataItems: action.payload.data,
      };
    case DATA_DELETE_FAIL:
      return { ...state, isLoading: false, error: true };
    case DATA_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
