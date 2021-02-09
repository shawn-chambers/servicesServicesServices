import React, { useEffect, useContext } from 'react';
import debounce from 'lodash.debounce';
import { ReviewsContext } from '../ReviewsContext';
import ReviewList from './Reviews/ReviewList';
import Header from '../components/Header/Header';

const ReviewPage = (props) => {

  const { fetchReviews, startingReview, setStartingReview, reviews } = useContext(ReviewsContext);

  useEffect(() => {
    fetchReviews(startingReview);
  }, [startingReview]);

  window.onscroll = debounce(() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setStartingReview(startingReview + 10);
    }
  }, 200);

  return (
    <>
      <Header />
      <ReviewList />
    </>
  )

}

export default ReviewPage;