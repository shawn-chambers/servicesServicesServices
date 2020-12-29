import React from 'react';
import SizeBox from './SizeBox';
import { SelectorsContainer } from './SelectorsStyles.css';
import PurchaseButton from './PurchaseButton';
import ColorSelectors from './ColorSelectors';
import { useMakeOptionButtons } from '../../Hooks/useMakeButtons';

const SizeSelectors = ({ prodInfo }) => {

  const [sizeSelect, sizeState] = useMakeOptionButtons(prodInfo.sizes);
  const [select, state] = useMakeOptionButtons(prodInfo.options);

  return (
    <SelectorsContainer >
      <div className='button-container'>
        <div className='color-button-container'>
          {
            prodInfo.options.map((option, i) => {
              return <ColorSelectors key={i} option={option} toggle={select} state={state} />;
            })
          }
        </div>
        <div className='size-button-container'>
          {
            prodInfo.sizes.map((option, i) => {
              return <SizeBox key={i} option={option} toggle={sizeSelect} state={sizeState} />;
            })
          }
        </div>
      </div>
      <PurchaseButton active={sizeState.selected && state.selected} />
    </SelectorsContainer >
  )

}

export default SizeSelectors;