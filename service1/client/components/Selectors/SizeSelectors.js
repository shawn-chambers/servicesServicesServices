import React from 'react';

const SizeSelectors = (props) => {
  return (
    <>
      {
        props.available === 0 ?
          <button
            className={`selector out-of-stock`}
            onClick={() => {
              props.setSold(!props.sold);
            }}
          >
            <div className='button-content'>
              {props.option}
            </div>
          </button> :
          <button
            className={`selector ${props.state[props.option]}`}
            onClick={() => {
              props.toggle([props.option, props.state]);
              if (props.sold) {
                props.setSold(!props.sold);
              }
            }}
          >
            <div className='button-content'>
              {props.option}
            </div>
          </button>
      }
    </>
  )
}

export default SizeSelectors;