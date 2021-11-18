import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductList} from '../actions/products';
import {
  LoadingIndicator,
  Message,
  ProductTile
} from '../components';

const AllProducts = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productList);
  const {loading, error, products} = productsData;

  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <LoadingIndicator/>
      ) : error ? (
        <Message>
          {error}
        </Message>
      ) : (
        <div className='flex-row-evenly'>
          {products && products.map((item) => (
            <ProductTile key={item._id} product={item}/>
          ))}
        </div>
      )}
    </>
  )
};

export default AllProducts;