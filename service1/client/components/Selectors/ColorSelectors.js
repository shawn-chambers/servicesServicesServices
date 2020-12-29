import React from 'react';

const ColorSelectors = (props) => {

  return (
    <>
      <button className={`selector ${props.state[props.option]}`} onClick={() => props.toggle([props.option, props.state])}>{props.option}</button>
    </>
  )
}

export default ColorSelectors;