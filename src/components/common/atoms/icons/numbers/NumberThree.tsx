import React from 'react';

function NumberThree({ parentSize = 32 }: { parentSize?: number }) {
  return (
    <svg
      x={(parentSize - 22) / 2}
      y={(parentSize - 20) / 2}
      width='22'
      height='20'
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='19.5556' height='2' fill='#FC0D1B' />
      <rect y='18' width='19.5556' height='2' fill='#FC0D1B' />
      <rect y='2' width='22' height='2' fill='#FC0D1B' />
      <rect y='16' width='22' height='2' fill='#FC0D1B' />
      <rect x='14.6666' y='4' width='7.33333' height='4' fill='#FC0D1B' />
      <rect x='14.6666' y='12' width='7.33333' height='4' fill='#FC0D1B' />
      <rect x='7.33325' y='8' width='12.2222' height='4' fill='#FC0D1B' />
    </svg>
  );
}

export default NumberThree;
