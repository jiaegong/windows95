import { IconProps } from '@/types/common';
import React, { cloneElement } from 'react';
import Bomb from './Bomb';
import {
  NumberOne,
  NumberTwo,
  NumberThree,
  NumberFour,
  NumberFive,
  NumberSix,
  NumberSeven,
  NumberEight,
} from './tilenumbers';
import { Status } from '../../organisms/Minesweeper';

const numberTiles: { [key: number]: React.ReactElement } = {
  1: <NumberOne />,
  2: <NumberTwo />,
  3: <NumberThree />,
  4: <NumberFour />,
  5: <NumberFive />,
  6: <NumberSix />,
  7: <NumberSeven />,
  8: <NumberEight />,
};

function DefaultTile({
  size = 20,
  status,
  number,
}: IconProps & { status: Status; number: number | null }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {status === Status.HIDDEN || status === Status.MARKED ? (
        <g clipPath='url(#clip0_1_142)'>
          <rect
            width='32'
            height='32'
            transform='translate(32 32) rotate(-180)'
            fill='#BFBFBF'
          />
          <path d='M32 4L28 4L32 0L32 4Z' fill='#818181' />
          <path d='M32 28L28 28L32 32L32 28Z' fill='#818181' />
          <rect
            x='32'
            y='28'
            width='4'
            height='24'
            transform='rotate(-180 32 28)'
            fill='#818181'
          />
          <path d='M28 32L28 28L32 32L28 32Z' fill='#818181' />
          <path d='M4 32L4 28L0 32L4 32Z' fill='#818181' />
          <rect
            x='4'
            y='32'
            width='4'
            height='24'
            transform='rotate(-90 4 32)'
            fill='#818181'
          />
          <path d='M0 28L4 28L-4.48042e-07 32L0 28Z' fill='white' />
          <path d='M0 4L4 4L4.48042e-07 0L0 4Z' fill='white' />
          <rect y='4' width='4' height='24' fill='white' />
          <path d='M4 0L4 4L0 -3.00516e-07L4 0Z' fill='white' />
          <path d='M28 0L28 4L32 3.00516e-07L28 0Z' fill='white' />
          <rect
            x='28'
            width='4'
            height='24'
            transform='rotate(90 28 0)'
            fill='white'
          />
          {status === Status.MARKED && (
            <>
              <rect x='16' y='6' width='2' height='19' fill='black' />
              <rect x='8' y='22' width='16' height='4' fill='#010000' />
              <rect x='12' y='20' width='8' height='2' fill='#010000' />
              <rect x='14' y='6' width='4' height='10' fill='#FC0D1B' />
              <rect x='10' y='8' width='4' height='6' fill='#FC0D1B' />
              <rect x='8' y='10' width='2' height='2' fill='#FC0D1B' />
            </>
          )}
        </g>
      ) : (
        <g clipPath='url(#clip0_1_144)'>
          <rect width='32' height='32' fill='#BFBFBF' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2 0H0V2V32H2V2H32V0H2Z'
            fill='#818181'
          />
          {status === Status.MINE ? <Bomb parentSize={32} /> : null}
          {status === Status.NUMBER && number !== null
            ? cloneElement(numberTiles[number], { parentSize: 32 })
            : null}
        </g>
      )}
      <defs>
        <clipPath id='clip0_1_142'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default DefaultTile;
