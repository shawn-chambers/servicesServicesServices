import React, { useEffect, useContext } from 'react';
import debounce from 'lodash.debounce';
import { ReviewsContext } from '../ReviewsContext';
import ReviewList from './ReviewList';
import { Filled, Empty } from './Stars';
import Header from '../components/Header/Header';

const ReviewPage = (props) => {

  const { fetchReviews, startingReview, setStartingReview, reviews } = useContext(ReviewsContext);

  useEffect(() => {
    fetchReviews(startingReview);
  }, [startingReview]);

  const style = {

  }

  return (
    <>
      <Header />
      <ReviewList />
    </>
  )

}

export default ReviewPage;