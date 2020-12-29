import React from 'react';
import SizeSelectors from './SizeSelectors';
import { SelectorsContainer } from './SelectorsStyles.css';
import PurchaseButton from './PurchaseButton';
import ColorSelectors from './ColorSelectors';
import { useMakeOptionButtons } from '../../Hooks/useMakeButtons';

const OptionSelectors = ({ prodInfo }) => {

  const [sizeSelect, size] = useMakeOptionButtons(prodInfo.sizes);
  const [colorSelect, color] = useMakeOptionButtons(prodInfo.options);

  return (
    <SelectorsContainer >
      <div className='button-container'>
        <div className='color-button-container'>
          {
            prodInfo.options.map((option, i) => {
              return <ColorSelectors key={i} option={option} toggle={colorSelect} state={color} />;
            })
          }
        </div>
        <div className='size-button-container'>
          {
            prodInfo.sizes.map((option, i) => {
              return <SizeSelectors key={i} option={option} toggle={sizeSelect} state={size} />;
            })
          }
        </div>
      </div>
      <PurchaseButton size={size.selected} color={color.selected} />
    </SelectorsContainer >
  )

}

export default OptionSelectors;