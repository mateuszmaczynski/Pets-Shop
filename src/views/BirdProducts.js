import React from 'react';
import data from "../db";
import {ProductTile} from "../components";

const BirdProducts = () => {
  const birds = data.products.filter(({category}) => (category === 'Bird'))
  return (
    <div className="flex-row-evenly">
      {birds.map((item) => (
        <ProductTile key={item._id} product={item} />
      ))}
    </div>
  )
};

export default BirdProducts;