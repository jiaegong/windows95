import { theme } from '@/styles/theme';
import React from 'react';

function CloseIcon({ disabled }: { disabled?: boolean }) {
  return (
    <svg
      width='8'
      height='8'
      viewBox='0 0 8 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H2V1.14286H3V2.28571H5V1.14286H6V0H8V1.14286H7V2.28571H6V3.42857H5V4.57143H6V5.71429H7V6.85714H8V8H6V6.85714H5V5.71429H3V6.85714H2V8H0V6.85714H1V5.71429H2V4.57143H3V3.42857H2V2.28571H1V1.14286H0V0Z'
        fill={disabled ? theme.colors.disabled : theme.colors.black}
      />
    </svg>
  );
}

export default CloseIcon;
