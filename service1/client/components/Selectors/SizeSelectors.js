import React, { useReducer } from 'react';
import SizeBox from './SizeBox';
import { SelectorsContainer } from './SelectorsStyles.css';
import PurchaseButton from './PurchaseButton';

const categoryParser = (category) => {
  switch (category) {
    case 'clothing':
    case 'headwear':
      return ['XS', 'S', 'M', 'L', 'XL'];
    default:
      return ['8', '9', '10', '11', '12'];
  }
}

/*
['XS', 'S', 'M', 'L', 'XL'],

{
  'XS': 1
  'S':0
  'M': 3
  'L': 8
  'XL':10
}
*/


const SizeSelectors = ({prodInfo}) => {
  
  const selectorReducer = (state, action) => {
    let [option, status] = action;
    status = status[option] === 'selected' ? 'unselected' : 'selected';
    if (status === 'unselected') {
      return {
        ...initialState,
        [option]: status,
        selected: false
      }
    } else {
      return {
        ...initialState,
        [option]: status,
        selected: true
      }
    }
  }

  const select = (action) => {
    dispatch(action);
  }

  const initialState = categoryParser(prodInfo.category).reduce((acc, curr) => {
    acc[curr] = 'unselected';
    return acc;
  }, {selected: false});

  const [state, dispatch] = useReducer(selectorReducer, initialState);

  return (
    <SelectorsContainer >
      <div className='button-container'>
        {
          categoryParser(prodInfo.category).map((option, i) => {
            return <SizeBox key={i} option={option} toggle={select} state={state}/>;
          })
        }
      </div>
      <PurchaseButton active={state.selected} />
    </SelectorsContainer >
  )
}

export default SizeSelectors;