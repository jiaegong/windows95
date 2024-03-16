import { theme } from '@/styles/theme';
import emotionStyled from '@emotion/styled';
import React from 'react';

type DefaultButtonProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
};

function DefaultButton({
  children,
  width = 'auto',
  height = 'auto',
}: DefaultButtonProps) {
  return (
    <ButtonLayout width={width} height={height}>
      {children}
    </ButtonLayout>
  );
}

export default DefaultButton;

const ButtonLayout = emotionStyled.button<DefaultButtonProps>`
width: ${({ width }) => width};
height: ${({ height }) => height};
padding: 6 16;
background: ${theme.colors.gray01};
box-shadow: 
  2px 2px 0px 0px #DFDFDF inset,
  -2px -2px 0px 0px #7F7F7F inset,
  1px 1px 0px 0px #FFFFFF inset,
  -1px -1px 0px 0px #000000 inset;

  :disabled {
    color: ${theme.colors.disabled};
  }
`;
