import {
  LOAD_USER_BEGIN,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_SINGLE_USER_BEGIN,
  LOAD_SINGLE_USER_SUCCESS,
  LOAD_SINGLE_USER_FAIL,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  DELETE_SINGLE_USER_SUCCESS,
  DELETE_SINGLE_USER_FAIL,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  FILTER_USER,
} from "../actions/UserAction";

const initialState = {
  userList: [],
  user: {},
  userFilter: "",
  loading: false,
  error: null,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userList: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case LOAD_SINGLE_USER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case LOAD_SINGLE_USER_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case DELETE_SINGLE_USER_SUCCESS:
      return { ...state };
    case DELETE_SINGLE_USER_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case FILTER_USER:
      return {
        ...state,
        userFilter: action.payload,
      };
    default:
      return state;
  }
};
