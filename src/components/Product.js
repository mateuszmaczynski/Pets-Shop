import React from 'react';
import './Product.scss';
import {Rating} from './index';

const Product = ({product}) => {
  return (
    <div key={product.id} className='product-tile'>
      <a href={`/product/${product._id}`}>
        <img className='product-image' src={product.image} alt={product.name} />
      </a>
      <div className='product-description'>
        <div className="product-description__name">
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
        </div>
        <div className='product-description__overview'>
          <div className='product-description__overview-price'>${product.price}</div>
          <div className='product-description__overview-rate' >
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Product;