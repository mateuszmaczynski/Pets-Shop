import React from 'react'
import {Rating} from '../components';
import { Link, useParams} from 'react-router-dom';
import data from '../db';


const ProductPage = (props) => {
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
            <img src={product.image} alt={product.name}></img>
          </div>
        </div>
        <div className='flex-col-1'>
          <div className='text-medium'>{product.name}</div>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <div className='text-small'>Price: ${product.price}</div>
          <div className='text-small'>Description:
            <p>
              {product.description}
            </p>
          </div>
        </div>
        <div className='flex-col-1'>
          <button className='button'>Add to cart</button>
        </div>
      </div>

    </div>
  )
}

export default ProductPage;


