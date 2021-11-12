import axios from 'axios';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS
} from "../constants";

export const getProductList = () => async (dispatch) => {
  let getProductsUrl = 'https://run.mocky.io/v3/4a586095-e4c1-42c6-b129-56adbebe01f6';
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