import React from 'react';

function NumberEight({ parentSize = 32 }: { parentSize?: number }) {
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
      <rect y='2' width='20' height='2' fill='#878787' />
      <rect y='16' width='20' height='2' fill='#878787' />
      <rect x='2' width='16' height='2' fill='#878787' />
      <rect x='2' y='18' width='16' height='2' fill='#878787' />
      <rect x='2' y='8' width='16' height='4' fill='#878787' />
      <rect y='4' width='6' height='4' fill='#878787' />
      <rect y='12' width='6' height='4' fill='#878787' />
      <rect x='14' y='4' width='6' height='4' fill='#878787' />
      <rect x='14' y='12' width='6' height='4' fill='#878787' />
    </svg>
  );
}

export default NumberEight;
