import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  LoadingIndicator,
  Message,
  ProductTile
} from '../components';
import {useParams} from "react-router-dom";

const SearchPage = () => {
  const [items, setItems] = useState(false);
  const {name} = useParams();
  const searchItem = name.toLowerCase();
  const productsData = useSelector((state) => state.productList);
  const {loading, error, products} = productsData;

  useEffect(() => {
    if (products && products.length >= 1) {
      let itemsFound = products.filter((item) => item.name.toLowerCase().indexOf(searchItem) >= 0);
      setItems(itemsFound)
    }
  }, [products, searchItem])

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
          {items && items.map((el) => (
            <ProductTile key={el._id} product={el}/>
          ))}
        </div>
      )}
    </>
  )
};

export default SearchPage;