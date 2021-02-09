import React, { useContext } from 'react';
import Review from './Review';
import { ReviewsContext } from '../../ReviewsContext';

const ReviewList = (props) => {

  const { reviews } = useContext(ReviewsContext)

  return (
    <>
      {reviews.map((review, i) => {
        return (
          <Review review={review} key={i}/>
        )
      })}
    </>
  )

}

export default ReviewList;