import React from 'react';

function NumberFive({ parentSize = 32 }: { parentSize?: number }) {
  return (
    <svg
      x={(parentSize - 23) / 2}
      y={(parentSize - 20) / 2}
      width='23'
      height='20'
      viewBox='0 0 23 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='20.7001' y='10' width='2.3' height='8' fill='#852123' />
      <rect width='23' height='4' fill='#852123' />
      <rect y='4' width='4.6' height='4' fill='#852123' />
      <rect y='8' width='20.7' height='4' fill='#852123' />
      <rect y='16' width='20.7' height='4' fill='#852123' />
      <rect x='16.1' y='12' width='4.6' height='4' fill='#852123' />
    </svg>
  );
}

export default NumberFive;
