import React from 'react';

const ColorSelectors = (props) => {

  const makeStyle = (props) => {
    if (props.state[props.option] === 'selected') {
      return {
        background: props.option
      }
    } else {
      return {
        background: props.option,
        border: `3px solid ${props.option}`
      }
    }
  }

  let styles = makeStyle(props);

  return (
    <>
      <button className={`color selector ${props.state[props.option]}`} style={styles} onClick={() => props.toggle([props.option, props.state])}></button>
    </>
  )
}

export default ColorSelectors;