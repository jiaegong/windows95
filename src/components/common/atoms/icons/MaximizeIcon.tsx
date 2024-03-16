import { theme } from '@/styles/theme';
import React from 'react';

function MaximizeIcon({ disabled }: { disabled?: boolean }) {
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
        d='M8 0H0V8H8V0ZM7.11111 1.77778H0.888889V7.11111H7.11111V1.77778Z'
        fill={disabled ? theme.colors.disabled : theme.colors.black}
      />
    </svg>
  );
}

export default MaximizeIcon;
