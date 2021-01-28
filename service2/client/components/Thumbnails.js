import React from 'react';
import { Dot } from 'pure-react-carousel';

const Thumbnails = ({ pictures }) => {

  if (!pictures.length) return null;
  
  return (
    <>
      {
        pictures.map((pic, i) => {
          return (
            <Dot slide={i} key={`${pic}${i}`} className='thumbnail-group'>
              <img src={pic} className='thubmnail'></img>
            </Dot>
          )
        })
      }
    </>
  )
}

export default Thumbnails;