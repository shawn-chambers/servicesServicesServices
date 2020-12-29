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

  return (
    <SelectorsContainer >
      <div className='button-container'>
        <div className='label medium'>
          Select Color:
        </div>
        <div className='color-button-container'>
          {
            prodInfo.options.map((option, i) => {
              return <ColorSelectors key={i} option={option} toggle={colorSelect} state={color} />;
            })
          }
        </div>
        <div className='label medium'>
          Select Size: <span>{soldOut ? <span className='sold-out'>Sorry, that size is sold out</span> : ''}</span>
        </div>
        <div className='size-button-container'>
          {
            prodInfo.sizes.map((option, i) => {
              return <SizeSelectors key={`${i}-${option}`} available={prodInfo.sizesAvailable[option]} option={option} toggle={sizeSelect} setSold={setSoldOut} sold={soldOut} state={size} />;
            })
          }
        </div>
      </div>
      <PurchaseButton size={size.selected} color={color.selected} />
    </SelectorsContainer >
  )

}

export default OptionSelectors;