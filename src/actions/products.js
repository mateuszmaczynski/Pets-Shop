import axios from 'axios';
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS
} from "../constants";

export const getProductList = () => async (dispatch) => {
  let getProductsUrl = 'https://run.mocky.io/v3/a1925849-2f6f-4fde-af9e-2ed813520673';
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  })
  try {
    const { data } = await axios.get(getProductsUrl);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message})
  }
}

export const getProductDetails = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    let getProductUrl = 'https://run.mocky.io/v3/a1925849-2f6f-4fde-af9e-2ed813520673';
    const { data } = await axios.get(getProductUrl);
    const product = data.products.find(({_id}) => _id == productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: product });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error?.response?.data?.message ? error.response.data.message : error?.message
    })
  }
}