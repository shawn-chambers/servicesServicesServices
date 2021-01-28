import React from 'react';
import { CarouselProvider, Slide, Slider, ButtonNext, ButtonBack } from 'pure-react-carousel';
import Thumbnails from './Thumbnails';
import { CarouselStyles } from './CarouselStyles.css'

import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = ({ pictures }) => {
  return (
    <CarouselStyles>
      < CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={50}
        totalSlides={pictures.length}
        className="carousel"
      >
        <Thumbnails pictures={pictures} />
        <Slider>
          {
            pictures.map((pic, i) => {
              return (
                <Slide index={i} key={i}>
                  <img src={pic}></img>
                </Slide>
              )
            })
          }
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </CarouselStyles>
  )
}

export default Carousel;