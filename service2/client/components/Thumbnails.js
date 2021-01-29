import React from 'react';
import { Dot } from 'pure-react-carousel';

const Thumbnails = ({ pictures }) => {

  if (!pictures.length) return null;
  
  return (
    <div className='all-the-nails'>
      {
        pictures.map((pic, i) => {
          return (
            <Dot slide={i} key={`${pic}${i}`} className='thumbnail'>
              <img src={pic} className='thubmnail-pic'></img>
            </Dot>
          )
        })
      }
    </div>
  )
}

export default Thumbnails;