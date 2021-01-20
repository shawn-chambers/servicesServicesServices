import React, { useState } from 'react';
import SizeSelectors from './SizeSelectors';
import { SelectorsContainer } from './SelectorsStyles.css';
import PurchaseButton from './PurchaseButton';
import ColorSelectors from './ColorSelectors';
import { useMakeOptionButtons } from '../../Hooks/useMakeButtons';

const OptionSelectors = ({ prodInfo }) => {
  const [sizeSelect, size] = useMakeOptionButtons(prodInfo.sizes);
  const [colorSelect, color] = useMakeOptionButtons(prodInfo.options);
  const [soldOut, setSoldOut] = useState(false);
  
  if (!Object.keys(prodInfo).length) return null;

  return (
    <SelectorsContainer >
      <div className='button-container'>
        <div className='label medium'>
          Select Color:
        </div>
        <div className='color-button-container'>
          {
            Object.keys(prodInfo).length > 0 ?
            prodInfo.options.map((option, i) => (
              <ColorSelectors key={i} option={option} toggle={colorSelect} state={color} />
            )) :
            null
          }
        </div>
        <div className='label medium'>
          Select Size: {soldOut ? <span className='sold-out'>Sorry, that size is sold out</span> : ''}
        </div>
        <div className='size-button-container'>
          {
            Object.keys(prodInfo).length > 0 ?
            prodInfo.sizes.map((option, i) => (
              <SizeSelectors key={`${i}-${option}`} available={prodInfo.sizesAvailable[option]} option={option} toggle={sizeSelect} setSold={setSoldOut} sold={soldOut} state={size} />
            )) :
            null
          }
        </div>
      </div>
      <PurchaseButton size={size.selected} color={color.selected} />
    </SelectorsContainer >
  )

}

export default OptionSelectors;