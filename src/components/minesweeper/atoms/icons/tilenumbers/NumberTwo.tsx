import React from 'react';

function NumberTwo({ parentSize = 32 }: { parentSize?: number }) {
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
      <rect y='2' width='20' height='2' fill='#0E7A11' />
      <rect x='2' width='16' height='2' fill='#0E7A11' />
      <rect y='4' width='6' height='2' fill='#0E7A11' />
      <rect x='14' y='4' width='6' height='4' fill='#0E7A11' />
      <rect x='10' y='8' width='8' height='2' fill='#0E7A11' />
      <rect x='6' y='10' width='10' height='2' fill='#0E7A11' />
      <rect x='2' y='12' width='10' height='2' fill='#0E7A11' />
      <rect y='14' width='8' height='2' fill='#0E7A11' />
      <rect y='16' width='20' height='4' fill='#0E7A11' />
    </svg>
  );
}

export default NumberTwo;
