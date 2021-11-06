import React from 'react';
import data from "../db";
import {Product} from "../components";

const CatProducts = () => {
  const catProducts = data.products.filter(({category}) => (category === 'Cat'))
  return (
    <>
      {catProducts.map((item) => (
        <Product key={item._id} product={item} />
      ))}
    </>
  )
};

export default CatProducts;