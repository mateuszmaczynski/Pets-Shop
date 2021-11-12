import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {
  productDetailsReducer,
  productListReducer,
} from '../reducers/products';

const initialState = {};

const reducer = combineReducers({
  productDetails: productDetailsReducer,
  productList: productListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
