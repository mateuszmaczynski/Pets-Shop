import React from 'react';
import data from "../db";
import {ProductTile} from "../components";

const CatProducts = () => {
  const catProducts = data.products.filter(({category}) => (category === 'Cat'))
  return (
    <div className="flex-row-evenly">
      {catProducts.map((item) => (
        <ProductTile key={item._id} product={item} />
      ))}
    </div>
  )
};

export default CatProducts;