import {
  LOAD_ORDERS_BEGIN,
  LOAD_ORDERS_SUCCESS,
  LOAD_ORDERS_FAIL,
  LOAD_SINGLE_ORDERS_BEGIN,
  LOAD_SINGLE_ORDERS_SUCCESS,
  LOAD_SINGLE_ORDERS_FAIL,
  EDIT_ORDER_SUCCESS,
  EDIT_ORDER_FAIL,
  FILTER_ORDER,
} from "../actions/OrderAction";

const initialState = {
  orderList: [],
  order: {},
  orderFilter: "",
  loading: false,
  error: null,
};

export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orderList: action.payload,
      };
    case LOAD_ORDERS_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case LOAD_SINGLE_ORDERS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SINGLE_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case LOAD_SINGLE_ORDERS_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case EDIT_ORDER_SUCCESS:
      return { ...state };
    case EDIT_ORDER_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case FILTER_ORDER:
      return {
        ...state,
        orderFilter: action.payload,
      };
    default:
      return state;
  }
};
