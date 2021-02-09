import React, { useState, createContext } from 'react';
import axios from 'axios';

export const ReviewsContext = createContext();

export const ReviewsContextProvider = (props) => {

  const [reviews, setReviews] = useState([]);
  const [startingReview, setStartingReview] = useState(0);
  const [average, setAverage] = useState(null);

  const fetchReviews = (firstReview) => {
    let prodId = window.location.pathname.slice(1, -1);
    axios.get(`http://localhost:3005/api/reviews/${prodId}/${firstReview}`)
      .then(({data}) => {
        let allReviews = [...reviews, ...data.data.reviews];
        setReviews(allReviews);
        setAverage(data.data.reviews[0].Product.average);
      })
      .catch(err => console.log('error fetching reviews', err));
  }

  return (
    <ReviewsContext.Provider
      value={{
        setReviews,
        reviews,
        startingReview,
        setStartingReview,
        fetchReviews,
        average
      }}
    >
      {props.children}
    </ReviewsContext.Provider>
  )
}