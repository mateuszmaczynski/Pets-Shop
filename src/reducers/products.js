import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS
} from '../constants';

export const productListReducer = (
  state = {loading: true, products: []},
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {loading: true};
    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload};
    case PRODUCT_LIST_SUCCESS:
      return {loading: false, products: action.payload.products}
    default:
      return state;
  }
}