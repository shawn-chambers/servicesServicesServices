import React from 'react';
import { TitleStyles } from './TitleStyles.css.js'

const Title = ({ prodInfo }) => {
  return (
    <>
      <TitleStyles>
        <div className='title bold'>{prodInfo.name}</div>
        <div className='price medium'>${prodInfo.price}</div>
      </TitleStyles>
    </>
  )
}

export default Title;