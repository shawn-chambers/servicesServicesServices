import React, { useState } from 'react';

const ColorSelectors = (props) => {

  const [border, setBorder] = useState({
    background: props.option,
    border: `3px solid ${props.option}`
  })

  const handleEnter = () => {
    setBorder({
      background: props.option,
      border: '3px solid magenta'
    })
  }

  const handleLeave = () => {
    setBorder({
      background: props.option,
      border: `3px solid ${props.option}`
    })
  }

  return (
    <>
      <button
        className={`color selector ${props.state[props.option]}`}
        style={border} onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => props.toggle([props.option, props.state])}>
      </button>
    </>
  )
}

export default ColorSelectors;