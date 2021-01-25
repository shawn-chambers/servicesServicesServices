import React from 'react';

const Carousel = ({ pictures }) => {
  return (
    <div className='carousel'>
      <Arrow />
      <ImageSlide />
    </div>
  )
}

export default Carousel;