import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM
} from '../constants';

export const addToCart = (productData, productId, quantity) => async (dispatch, getState) => {
  if (productId) {
    dispatch({
      type: CART_ADD_ITEM, payload: {
        code: productData?.code,
        name: productData?.name,
        image: productData?.image,
        price: productData?.price,
        countInStock: productData?.countInStock,
        id: productData?.id,
        quantity: quantity,
      },
    });
  }
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({type: CART_REMOVE_ITEM, payload: productId});
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
