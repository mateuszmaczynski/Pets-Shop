import React from 'react';
import './Rating.scss';

const Rating = ({rating = 0, numReviews = '' }) => {
  let stars = [];
  for(let i = 1; i < 6; i ++ ){
    stars.push(
      <span key={i}>
        <i
          className={
            rating >= i
              ? 'fa fa-star'
              : rating >= i - 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
    )
  }
  return (
    <div className="rating">
      {stars}
      <span>{numReviews + ' reviews'}</span>
    </div>
  );
}

export default Rating;
