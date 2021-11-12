import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetails} from '../actions/products';
import {
  LoadingIndicator,
  Message,
  Rating
} from '../components';
import {Link, useParams} from 'react-router-dom';

const ProductPage = () => {
  const {id: productId} = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const {loading, error, product} = productDetails;
  console.log('loading ==', loading);
  console.log('product ==', product);

  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  return (
    <>
      {loading ? (
        <LoadingIndicator/>
      ) : error ? (
        <Message>
          {error}
        </Message>
      ) : (
        <div>
          <Link to='/'>Back to main page</Link>
          <div className='flex-row margin-top-medium'>
            <div className='flex-col-2'>
              <div className='flex-row-center'>
                <img src={product.image} alt={product.image}></img>
              </div>
            </div>
            <div className='flex-col-2 text-small'>
              <div className='text-medium'>{product.name}</div>
              <Rating rating={product.rating} numReviews={product.numReviews}/>
              <div>Price: {`${product.price} ${product.currency}`}</div>
              <div>Brand: ${product.brand}</div>
              <div>Category: ${product.subcategory}</div>
              <div>Weight: {product.weight}</div>
              <div className='margin-top-low'>Main benefits:
                <ul className='list-circle'>
                  {product?.sellingPoints && product.sellingPoints.map((item, index) => (
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
                  <button className={`button button__wide ${product.countInStock === 0 && 'button__disabled'}`}
                          dibabled={product.countInStock === 0 ? true : undefined}>Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductPage;