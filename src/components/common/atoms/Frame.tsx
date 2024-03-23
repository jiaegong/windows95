'use client';

import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React from 'react';

type FrameProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
};

function Frame({ children, width = 'auto', height = 'auto' }: FrameProps) {
  return (
    <FrameLayout width={width} height={height}>
      {children}
    </FrameLayout>
  );
}

export default Frame;

const FrameLayout = styled.div<FrameProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 6 16;
  background: ${theme.colors.gray01};
  border: 1px solid ${theme.colors.black};
  box-shadow: 2px 2px 0px 0px #dfdfdf inset, -2px -2px 0px 0px #7f7f7f inset,
    1px 1px 0px 0px #ffffff inset, -1px -1px 0px 0px #000000 inset;
  display: flex;
  justify-content: center;
  align-items: center;
`;
