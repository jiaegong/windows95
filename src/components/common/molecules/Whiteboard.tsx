'use client';

import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React from 'react';
import Titlebar from './Titlebar';
import Optionbar from './Optionbar';

type WhiteboardProps = {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  onClose: () => void;
  onDragStart: () => void;
  onDragEnd: () => void;
};

function Whiteboard({
  title,
  children,
  icon,
  onClose,
  onDragStart,
  onDragEnd,
}: WhiteboardProps) {
  return (
    <WhiteboardLayout>
      <Titlebar
        icon={icon}
        onClose={onClose}
        onMouseOver={onDragStart}
        onMouseOut={onDragEnd}
      >
        {title}
      </Titlebar>
      <Optionbar />
      <ContentWrapper>{children}</ContentWrapper>
    </WhiteboardLayout>
  );
}

export default Whiteboard;

const WhiteboardLayout = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  background: ${theme.colors.gray01};
  box-shadow: 2px 2px 0px 0px #dfdfdf inset, -2px -2px 0px 0px #7f7f7f inset,
    1px 1px 0px 0px #ffffff inset, -1px -1px 0px 0px #000000 inset;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  background: ${theme.colors.white};
  box-shadow: 2px 2px 0px 0px #000000 inset, -2px -2px 0px 0px #c1c1c1 inset,
    1px 1px 0px 0px #808080 inset, -1px -1px 0px 0px #ffffff inset;
`;
