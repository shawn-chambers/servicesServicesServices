import React from 'react';

const PurchaseButton = ({ color, size }) => {
  const set = (color, size) => {
    if (!color) {
      return 'Select a color'
    } else if (!size) {
      return 'Select a size'
    } else {
      return 'Purchase'
    }
  }

  return (
    <button className={`purchase-button ${color && size ? 'active' : ''}`}>
      {set(color, size)}
    </button>
  )
}

export default PurchaseButton;