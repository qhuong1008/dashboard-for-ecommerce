import { OrderApi } from "../../api/index";

export const LOAD_ORDERS_BEGIN = "LOAD_ORDERS_BEGIN";
export const LOAD_ORDERS_SUCCESS = "LOAD_ORDERS_SUCCESS";
export const LOAD_ORDERS_FAIL = "LOAD_ORDERS_FAIL";
export const LOAD_SINGLE_ORDERS_BEGIN = "LOAD_SINGLE_ORDERS_BEGIN";
export const LOAD_SINGLE_ORDERS_SUCCESS = "LOAD_SINGLE_ORDERS_SUCCESS";
export const LOAD_SINGLE_ORDERS_FAIL = "LOAD_SINGLE_ORDERS_FAIL";

export const loadOrderList = () => async (dispatch) => {
  dispatch({
    type: LOAD_ORDERS_BEGIN,
  });
  OrderApi.loadAllOrders()
    .then((response) => {
      dispatch({
        type: LOAD_ORDERS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_ORDERS_FAIL,
        payload: error,
      });
    });
};

export const loadOrderById = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_SINGLE_ORDERS_BEGIN,
  });
  OrderApi.getOrderById(id)
    .then((response) => {
      dispatch({
        type: LOAD_SINGLE_ORDERS_SUCCESS,
        payload: response.data[0],
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_SINGLE_ORDERS_FAIL,
        payload: error,
      });
    });
};
