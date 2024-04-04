import React from 'react';

function NumberSix({ parentSize = 32 }: { parentSize?: number }) {
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
      <rect y='2' width='2' height='16' fill='#278786' />
      <rect x='2' width='4' height='20' fill='#278786' />
      <rect x='2' width='16' height='4' fill='#278786' />
      <rect x='2' y='8' width='16' height='4' fill='#278786' />
      <rect x='2' y='16' width='16' height='4' fill='#278786' />
      <rect x='14' y='12' width='4' height='4' fill='#278786' />
      <rect x='18' y='10' width='2' height='8' fill='#278786' />
    </svg>
  );
}

export default NumberSix;
