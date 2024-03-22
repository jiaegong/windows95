import React from 'react';

function Checkbox() {
  return (
    <svg
      width='14'
      height='13'
      viewBox='0 0 14 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_iiii_1_1652)'>
        <rect width='13' height='13' transform='translate(0.5)' fill='white' />
        <path
          d='M10.5 3H9.5V4H8.5V5H7.5V6H6.5V7H5.5V6H4.5V5H3.5V8H4.5V9H5.5V10H6.5V9H7.5V8H8.5V7H9.5V6H10.5V3Z'
          fill='black'
        />
      </g>
      <defs>
        <filter
          id='filter0_iiii_1_1652'
          x='0.5'
          y='0'
          width='13'
          height='13'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='2' dy='2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_1_1652'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-2' dy='-2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_innerShadow_1_1652'
            result='effect2_innerShadow_1_1652'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='1' dy='1' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_innerShadow_1_1652'
            result='effect3_innerShadow_1_1652'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-1' dy='-1' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='effect3_innerShadow_1_1652'
            result='effect4_innerShadow_1_1652'
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Checkbox;
