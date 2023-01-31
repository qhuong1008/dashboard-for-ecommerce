import { UserApi } from "../../api/index";

export const GET_ALL_NGUOIDUNG_SUCCESS = "GET_ALL_NGUOIDUNG_SUCCESS";
export const GET_ALL_NGUOIDUNG_FAIL = "GET_ALL_NGUOIDUNG_FAIL";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAIL = "SIGNIN_FAIL";

// export const getAllNguoiDung = () => async (dispatch) => {
//   UserApi.getAllUsers()
//     .then((response) => {
//       dispatch({
//         type: GET_ALL_NGUOIDUNG_SUCCESS,
//         payload: response.data,
//       });
//     })
//     .catch((error) => {
//       dispatch({
//         type: GET_ALL_NGUOIDUNG_FAIL,
//         payload: error,
//       });
//     });
// };

export const getNguoiDungById = (id) => async (dispatch) => {
  UserApi.getUserById(id)
    .then((response) => {
      dispatch({
        type: SIGNIN_SUCCESS,
        payload: response.data[0],
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGNIN_FAIL,
        payload: error,
      });
    });
};
