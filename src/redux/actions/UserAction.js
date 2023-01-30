import { UserApi } from "../../api/index";

export const LOAD_USER_BEGIN = "LOAD_USER_BEGIN";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAIL = "LOAD_USER_FAIL";
export const LOAD_SINGLE_USER_BEGIN = "LOAD_SINGLE_USER_BEGIN";
export const LOAD_SINGLE_USER_SUCCESS = "LOAD_SINGLE_USER_SUCCESS";
export const LOAD_SINGLE_USER_FAIL = "LOAD_SINGLE_USER_FAIL";
export const DELETE_SINGLE_USER_SUCCESS = "DELETE_SINGLE_USER_SUCCESS";
export const DELETE_SINGLE_USER_FAIL = "DELETE_SINGLE_USER_FAIL";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";
export const FILTER_USER = "FILTER_USER";

export const loadUserList = () => async (dispatch) => {
  dispatch({
    type: LOAD_USER_BEGIN,
  });
  UserApi.getAllUsers()
    .then((response) => {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: error,
      });
    });
};

export const loadUserById = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_SINGLE_USER_BEGIN,
  });
  UserApi.getUserById(id)
    .then((response) => {
      dispatch({
        type: LOAD_SINGLE_USER_SUCCESS,
        payload: response.data[0],
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_SINGLE_USER_FAIL,
        payload: error,
      });
    });
};
export const addNewUser = (user) => async (dispatch) => {
  UserApi.addUser(user)
    .then(() => {
      dispatch({
        type: ADD_USER_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_USER_FAIL,
        payload: error,
      });
    });
};

export const deleteUserById = (id) => async (dispatch) => {
  UserApi.deleteUserById(id)
    .then(() => {
      dispatch({
        type: DELETE_SINGLE_USER_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_SINGLE_USER_FAIL,
        payload: error,
      });
    });
};

export const editUser = (user) => async (dispatch) => {
  UserApi.editUser(user)
    .then(() => {
      dispatch({
        type: EDIT_USER_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: EDIT_USER_FAIL,
        payload: error,
      });
    });
};
export const FilterUser = (searchValue) => (dispatch) => {
  dispatch({
    type: FILTER_USER,
    payload: searchValue,
  });
};
