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
  let getProductsUrl = 'https://run.mocky.io/v3/9eed3593-c5e1-4a12-a45f-106ea86e0822';
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
    let getProductUrl = 'https://run.mocky.io/v3/9eed3593-c5e1-4a12-a45f-106ea86e0822';
    const { data } = await axios.get(getProductUrl);
    console.log('data =',data);
    const product = data.products.find(({_id}) => _id == productId);
    console.log('product =',product);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: product });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error?.response?.data?.message ? error.response.data.message : error?.message
    })
  }
}