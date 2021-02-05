/*

review_id: 732,
user_id: 446,
product_id: 4,
review_date: "2021-02-01T15:14:07.170Z",
rating: 4
review_text: "Consequuntur enim quia quo dolor optio. Numquam laborum voluptas. Quaerat dicta ipsa repudiandae dicta incidunt tempore. Ut sunt quia ex ullam consequatur facilis culpa architecto quasi.",
header: "At possimus placeat.",
would_recommend: false,
score: 3,
createdAt: "2021-02-02T01:27:44.437Z",
updatedAt: "2021-02-02T01:27:44.437Z",
User: {
  user_id: 446,
  username: "Precious_OConner23",
  thumbnail: "#E291A0",
  createdAt: "2021-02-02T01:27:44.315Z",
  updatedAt: "2021-02-02T01:27:44.315Z"
}

*/

import React from 'react';
import { Filled, Empty } from './Stars';

const Review = ({ review }) => {

  const renderStars = ({review_id, rating}, size) => {
    return (
      <span>
        {[...Array(rating).keys()].map(i => {
          return <Filled height={size} key={i + review_id} />
        })}
        {[...Array(5 - rating).keys()].map(i => {
          return <Empty height={size} key={i - review_id} />
        })}
      </span>
    )
  }

  return (
    <div className='review'>
      {renderStars(review, '15px')}
      <div>{review.header}</div>
      <div>{review.text}</div>
    </div>
  )
}

export default Review;