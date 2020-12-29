import React from 'react';

const SizeSelectors = (props) => {
  return (
    <>
      <button className={`selector ${props.state[props.option]}`} onClick={() => props.toggle([props.option, props.state])}>
        <div className='button-content'>
          {props.option}
        </div>
      </button>
    </>
  )
}

export default SizeSelectors;