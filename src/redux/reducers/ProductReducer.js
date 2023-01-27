import {
  LOAD_PRODUCTS_BEGIN,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
  LOAD_SINGLE_PRODUCT_BEGIN,
  LOAD_SINGLE_PRODUCT_SUCCESS,
  LOAD_SINGLE_PRODUCT_FAIL,
  LOAD_PRODUCT_TYPE_BEGIN,
  LOAD_PRODUCT_TYPE_SUCCESS,
  LOAD_PRODUCT_TYPE_FAIL,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_TYPE_SUCCESS,
  ADD_PRODUCT_TYPE_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_TYPE_SUCCESS,
  DELETE_PRODUCT_TYPE_FAIL,
} from "../actions/ProductAction";
const initialState = {
  productList: [],
  product: {},
  productTypes: [],
  loading: false,
  error: null,
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        loading: false,
      };
    case LOAD_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case LOAD_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case LOAD_SINGLE_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case LOAD_PRODUCT_TYPE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_PRODUCT_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        productTypes: action.payload,
      };
    case LOAD_PRODUCT_TYPE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case ADD_PRODUCT_TYPE_SUCCESS:
      return {
        ...state,
      };
    case ADD_PRODUCT_TYPE_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case DELETE_PRODUCT_TYPE_SUCCESS:
      return {
        ...state,
      };
    case DELETE_PRODUCT_TYPE_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
