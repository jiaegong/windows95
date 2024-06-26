import React from 'react';

function NumberSeven({ parentSize = 32 }: { parentSize?: number }) {
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
      <rect width='20' height='4' fill='black' />
      <rect x='14' y='4' width='6' height='4' fill='black' />
      <rect x='12' y='8' width='6' height='4' fill='black' />
      <rect x='10' y='12' width='6' height='4' fill='black' />
      <rect x='8' y='16' width='6' height='4' fill='black' />
    </svg>
  );
}

export default NumberSeven;
