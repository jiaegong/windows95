import { theme } from '@/styles/theme';
import React from 'react';

function MinimizeIcon({ disabled }: { disabled?: boolean }) {
  return (
    <svg
      width='6'
      height='2'
      viewBox='0 0 6 2'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='6'
        height='2'
        fill={disabled ? theme.colors.disabled : theme.colors.black}
      />
    </svg>
  );
}

export default MinimizeIcon;
