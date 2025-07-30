import React, { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
      <button
        onClick={increase}
        style={{
          backgroundColor: '#b72b2b',
          color: 'white',
          fontSize: '24px',
          width: '40px',
          height: '40px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        +
      </button>

      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{quantity}</span>

      <button
        onClick={decrease}
        style={{
          backgroundColor: '#b72b2b',
          color: 'white',
          fontSize: '24px',
          width: '40px',
          height: '40px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        −
      </button>
    </div>
  );
};

export default QuantitySelector;
