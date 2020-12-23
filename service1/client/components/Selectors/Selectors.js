import React from 'react';
import SizeBox from './SizeBox';
import { SelectorsContainer } from './SelectorsStyles.css';

const Selectors = (props) => {
  return (
    <SelectorsContainer >
      <div className={'button-container'}>
        {
          [...Array(5).keys()].map((box, i) => {
            return <SizeBox key={i}/>;
          })
        }
      </div>
    </SelectorsContainer >
  )
}

export default Selectors;