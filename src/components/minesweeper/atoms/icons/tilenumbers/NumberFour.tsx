import React from 'react';

function NumberFour({ parentSize = 32 }: { parentSize?: number }) {
  return (
    <svg
      x={(parentSize - 20) / 2}
      y={(parentSize - 20) / 2}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='4' width='6' height='4' fill='#020B79' />
      <rect x='2' y='4' width='6' height='4' fill='#020B79' />
      <rect y='8' width='20' height='4' fill='#020B79' />
      <rect x='12' width='6' height='20' fill='#020B79' />
    </svg>
  );
}

export default NumberFour;
