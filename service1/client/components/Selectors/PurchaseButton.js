import React from 'react';

const PurchaseButton = ({ active }) => {
  return (
    <div className='purchase'>
      <button className={`purchase-button ${active ? 'active' : ''}`}><span>{active ? 'Purchase' : 'Select a size'}</span></button>
    </div>
  )
}

export default PurchaseButton;