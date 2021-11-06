import React from 'react';
import data from "../db";
import {Product} from "../components";

const DogProducts = () => {
  const dogProducts = data.products.filter(({category}) => (category === 'Dog'))
  return (
    <>
      {dogProducts.map((item) => (
        <Product key={item._id} product={item} />
      ))}
    </>
  )
};

export default DogProducts;