import React from 'react';
import data from "../db";
import {ProductTile} from "../components";

const SmallPetsProducts = () => {
  const smallPets = data.products.filter(({category}) => (category === 'Small pet'))
  return (
    <div className="flex-row-evenly">
      {smallPets.map((item) => (
        <ProductTile key={item._id} product={item} />
      ))}
    </div>
  )
};

export default SmallPetsProducts;