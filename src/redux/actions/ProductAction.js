import { ProductApi } from "../../api/index";

export const LOAD_PRODUCTS_BEGIN = "LOAD_PRODUCTS_BEGIN";
export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS";
export const LOAD_PRODUCTS_FAIL = "LOAD_PRODUCTS_FAIL";
export const LOAD_SINGLE_PRODUCT_BEGIN = "LOAD_SINGLE_PRODUCT_BEGIN";
export const LOAD_SINGLE_PRODUCT_SUCCESS = "LOAD_SINGLE_PRODUCT_SUCCESS";
export const LOAD_SINGLE_PRODUCT_FAIL = "LOAD_SINGLE_PRODUCT_FAIL";
export const LOAD_PRODUCT_TYPE_BEGIN = "LOAD_PRODUCT_TYPE_BEGIN";
export const LOAD_PRODUCT_TYPE_SUCCESS = "LOAD_PRODUCT_TYPE_SUCCESS";
export const LOAD_PRODUCT_TYPE_FAIL = "LOAD_PRODUCT_TYPE_FAIL";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAIL = "ADD_PRODUCT_FAIL";
export const ADD_PRODUCT_TYPE_SUCCESS = "ADD_PRODUCT_TYPE_SUCCESS";
export const ADD_PRODUCT_TYPE_FAIL = "ADD_PRODUCT_TYPE_FAIL";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAIL = "DELETE_PRODUCT_FAIL";
export const DELETE_PRODUCT_TYPE_SUCCESS = "DELETE_PRODUCT_TYPE_SUCCESS";
export const DELETE_PRODUCT_TYPE_FAIL = "DELETE_PRODUCT_TYPE_FAIL";
export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
export const EDIT_PRODUCT_FAIL = "EDIT_PRODUCT_FAIL";
export const FILTER_PRODUCT = "FILTER_PRODUCT";
export const FILTER_PRODUCT_TYPE = "FILTER_PRODUCT_TYPE";

export const loadAllProducts = () => async (dispatch) => {
  dispatch({
    type: LOAD_PRODUCTS_BEGIN,
  });
  ProductApi.getAllProducts()
    .then((response) => {
      dispatch({
        type: LOAD_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_PRODUCTS_FAIL,
        payload: error,
      });
    });
};

export const loadProductById = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_SINGLE_PRODUCT_BEGIN,
  });
  ProductApi.getProductById(id)
    .then((response) => {
      dispatch({
        type: LOAD_SINGLE_PRODUCT_SUCCESS,
        payload: response.data[0],
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_SINGLE_PRODUCT_FAIL,
        payload: error,
      });
    });
};

export const getAllProductType = () => async (dispatch) => {
  dispatch({
    type: LOAD_PRODUCT_TYPE_BEGIN,
  });
  ProductApi.getAllProductTypes()
    .then((response) => {
      dispatch({
        type: LOAD_PRODUCT_TYPE_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_PRODUCT_TYPE_FAIL,
        payload: error,
      });
    });
};
export const addNewProduct = (product) => async (dispatch) => {
  ProductApi.addProduct(product)
    .then(() => {
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_PRODUCT_FAIL,
        payload: error,
      });
    });
};
export const addNewProductType = (product) => async (dispatch) => {
  ProductApi.addProductType(product)
    .then(() => {
      dispatch({
        type: ADD_PRODUCT_TYPE_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_PRODUCT_TYPE_FAIL,
        payload: error,
      });
    });
};

export const deleteProductById = (id) => async (dispatch) => {
  ProductApi.deleteProductById(id)
    .then(() => {
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PRODUCT_FAIL,
        payload: error,
      });
    });
};

export const deleteProductTypeById = (id) => async (dispatch) => {
  ProductApi.deleteProductTypeById(id)
    .then(() => {
      dispatch({
        type: DELETE_PRODUCT_TYPE_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PRODUCT_TYPE_FAIL,
        payload: error,
      });
    });
};

export const editProduct = (product) => async (dispatch) => {
  ProductApi.editProduct(product)
    .then(() => {
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: EDIT_PRODUCT_FAIL,
        payload: error,
      });
    });
};

export const filterProduct = (searchValue) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCT,
    payload: searchValue,
  });
};

export const filterProductType = (searchValue) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCT_TYPE,
    payload: searchValue,
  });
};
