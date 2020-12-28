import React from 'react';

const SizeBox = (props) => {
  return (
    <>
      <button className={`selector ${props.state[props.option]}`} onClick={() => props.toggle([props.option, props.state])}>{props.option}</button>
    </>
  )
}

export default SizeBox;