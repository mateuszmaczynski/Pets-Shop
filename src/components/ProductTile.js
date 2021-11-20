import React from 'react';
import './ProductTile.scss';
import {Link} from 'react-router-dom';
import {Rating} from './index';
import PropTypes from 'prop-types';

const ProductTile = ({product}) => {
  return (
    <div key={product.id} className='product-tile'>
      <div className='product-container'>
        <Link to={`/product/${product._id}`}>
          <img className='product-container-image' src={product.image} alt={product.name}/>
        </Link>
      </div>
      <div className='product-description'>
        <div className='product-description__name'>
          <Link to={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
        </div>
        <div className='product-description__overview'>
          <div className='product-description__overview-price'>${product.price}</div>
          <div className='product-description__overview-rate'>
            <Rating rating={product.rating} numReviews={product.numReviews}/>
          </div>
        </div>
      </div>
    </div>
  )
};

ProductTile.propTypes = {
  product: PropTypes.object,
};

export default ProductTile;