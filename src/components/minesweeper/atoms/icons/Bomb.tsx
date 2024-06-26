import { IconProps } from '@/types/common';
import React from 'react';

function Bomb({
  size = 26,
  parentSize = 32,
}: IconProps & { parentSize?: number }) {
  return (
    <svg
      x={(parentSize - size) / 2}
      y={(parentSize - size) / 2}
      width={size}
      height={size}
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='12' width='2' height='26' fill='black' />
      <rect
        x='26'
        y='12'
        width='2'
        height='26'
        transform='rotate(90 26 12)'
        fill='black'
      />
      <rect x='8' y='4' width='10' height='18' fill='black' />
      <rect
        x='22'
        y='8'
        width='10'
        height='18'
        transform='rotate(90 22 8)'
        fill='black'
      />
      <rect x='6' y='6' width='14' height='14' fill='black' />
      <rect x='20' y='4' width='2' height='2' fill='black' />
      <rect x='20' y='20' width='2' height='2' fill='black' />
      <rect x='4' y='4' width='2' height='2' fill='black' />
      <rect x='4' y='20' width='2' height='2' fill='black' />
      <rect x='8' y='8' width='4' height='4' fill='white' />
    </svg>
  );
}

export default Bomb;
