import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductList} from '../actions/products';
import {
  LoadingIndicator,
  Message,
  ProductTile
} from '../components';

const BirdProducts = () => {
  const [birdsProducts, setBirdsProducts] = useState(false);
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productList);
  const {loading, error, products} = productsData;

  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length >= 1) {
      let birds = products.filter((item) => item.category === 'Bird');
      setBirdsProducts(birds)
    }
  }, [products])

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
          {birdsProducts && birdsProducts.map((item) => (
            <ProductTile key={item._id} product={item}/>
          ))}
        </div>
      )}
    </>
  )
};

export default BirdProducts;