import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React from 'react';

type DefaultButtonProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
};

function DefaultButton({
  children,
  width = 'auto',
  height = 'auto',
  onClick,
}: DefaultButtonProps) {
  return (
    <ButtonLayout width={width} height={height} onClick={onClick}>
      {children}
    </ButtonLayout>
  );
}

export default DefaultButton;

const ButtonLayout = styled.button<DefaultButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 6 16;
  background: ${theme.colors.gray01};
  box-shadow: 2px 2px 0px 0px #dfdfdf inset, -2px -2px 0px 0px #7f7f7f inset,
    1px 1px 0px 0px #ffffff inset, -1px -1px 0px 0px #000000 inset;

  :disabled {
    color: ${theme.colors.disabled};
  }

  :active {
    box-shadow: 2px 2px 0px 0px #808080 inset, -2px -2px 0px 0px #c4c4c4 inset,
      1px 1px 0px 0px #000000 inset, -1px -1px 0px 0px #ffffff inset;
  }
`;
