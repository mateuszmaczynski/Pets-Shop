import React from 'react'
import {Rating} from '../components';
import { Link, useParams} from 'react-router-dom';
import data from '../db';


const ProductPage = () => {
  const { id } = useParams();
  const product = data.products.find((item) => item._id === id);
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <div>
      {/*<Link to='/'>Back to main page</Link>*/}
      <div className='flex-row margin-top-medium'>
        <div className='flex-col-2'>
          <div className='flex-row-center'>
            <img className='image-large' src={product.image} alt={product.name}></img>
          </div>
        </div>
        <div className='flex-col-2 text-small'>
          <div className='text-medium'>{product.name}</div>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <div>Price: {`${product.price} ${product.currency}`}</div>
          <div>Brand: ${product.brand}</div>
          <div>Category: ${product.subcategory}</div>
          <div>Weight: {product.weight}</div>
          <div className='margin-top-low'>Main benefits:
            <ul className='list-circle'>
              {product.sellingPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='margin-top-low'>Description:
            <p>
              {product.description}
            </p>
          </div>
        </div>
        <div className='flex-col-1 text-small'>
          <div className='card-box'>
            <div className='flex-row-between'>
              <div>Price</div>
              <div>{`${product.price} ${product.currency}`}</div>
            </div>
            <div className='flex-row-between'>
              <div>Status</div>
              <div>
                {product.countInStock > 0 ? (
                  <span className='success-text'>In stock</span>
                ) : (
                  <span className='error-text'>Unavailable</span>
                )}
              </div>
            </div>
            <div>
              <button className='button button__wide'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductPage;


