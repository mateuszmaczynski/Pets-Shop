import React from 'react';
import data from "../db";
import {ProductTile} from "../components";

const DogProducts = () => {
  const dogProducts = data.products.filter(({category}) => (category === 'Dog'))
  return (
    <div className="flex-row-evenly">
      {dogProducts.map((item) => (
        <ProductTile key={item._id} product={item} />
      ))}
    </div>
  )
};

export default DogProducts;