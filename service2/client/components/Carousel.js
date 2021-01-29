import React from 'react';
import { CarouselProvider, Slide, Slider, ButtonNext, ButtonBack } from 'pure-react-carousel';
import Thumbnails from './Thumbnails';
import Chevron from './Chevron';

import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({ pictures }) => {
  if (!pictures.length) return null;

  return (

    <CarouselProvider
      naturalSlideWidth={70}
      naturalSlideHeight={70}
      infinite={true}
      totalSlides={pictures.length}
    >
      <Thumbnails className='thumbnails' pictures={pictures} />
      <div className='money'>
        <div className='main-picture'>
          <Slider>
            {
              pictures.map((pic, i) => {
                return (
                  <Slide index={i} key={i} className={`image-slide slide-${i + 1}`}>
                    <img src={pic}></img>
                  </Slide>
                )
              })
            }
          </Slider>
        </div>
        <div className='navigation'>
          <ButtonBack><Chevron width={30} class={'accordion_icon left'}/></ButtonBack>
          <ButtonNext><Chevron width={30} class={'accordion_icon right'}/></ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  )
}

export default Carousel;