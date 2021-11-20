import React from 'react';
import './Rating.scss';
import PropTypes from 'prop-types';

const Rating = ({rating = 0, numReviews = 0 }) => {
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
    <div className='rating'>
      {stars}
      <span>{numReviews + ' reviews'}</span>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
  numReviews: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default Rating;
