import React from 'react';

function NumberOne({ parentSize = 32 }: { parentSize?: number }) {
  return (
    <svg
      x={(parentSize - 14) / 2}
      y={(parentSize - 20) / 2}
      width='14'
      height='20'
      viewBox='0 0 14 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='6' width='4' height='16' fill='#0B24FB' />
      <rect y='16' width='14' height='4' fill='#0B24FB' />
      <rect x='4' y='2' width='4' height='14' fill='#0B24FB' />
      <rect x='2' y='4' width='4' height='4' fill='#0B24FB' />
      <rect y='6' width='10' height='2' fill='#0B24FB' />
    </svg>
  );
}

export default NumberOne;
