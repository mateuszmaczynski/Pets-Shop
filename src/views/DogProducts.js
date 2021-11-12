import React, {useEffect, useState} from 'react';
import axios from "axios";

import {
  LoadingIndicator,
  Message,
  ProductTile
} from "../components";

const DogProducts = () => {
  const [dogProducts, setDogProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let getProductsUrl = 'https://run.mocky.io/v3/4a586095-e4c1-42c6-b129-56adbebe01f6';

  useEffect( () => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(getProductsUrl);
      console.log('data = ',response);
      let products = response.data.products.filter(({category}) => (category === 'Dog'))
      setLoading(false);
      setDogProducts(products);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : error ?(
        <Message>
          {error}
        </Message>
      ) : (
        <div className="flex-row-evenly">
          {dogProducts.map((item) => (
            <ProductTile key={item._id} product={item} />
          ))}
        </div>
      )}
    </>
  )
};

export default DogProducts;