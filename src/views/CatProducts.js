import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductList} from '../actions/products';
import {
  LoadingIndicator,
  Message,
  ProductTile
} from '../components';

const CatProducts = () => {
  const [catProducts, setCatProducts] = useState(false);
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productList);
  const {loading, error, products} = productsData;

  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length >= 1) {
      let cats = products.filter((item) => item.category === 'Cat');
      setCatProducts(cats)
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
          {catProducts && catProducts.map((item) => (
            <ProductTile key={item._id} product={item}/>
          ))}
        </div>
      )}
    </>
  )
};

export default CatProducts;