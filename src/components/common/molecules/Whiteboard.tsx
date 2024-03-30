'use client';

import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React from 'react';
import Titlebar from './Titlebar';
import Optionbar from './Optionbar';

type WhiteboardProps = {
  whiteboard?: boolean;
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  util?: React.ReactNode;
  onClose: () => void;
  onDragStart: () => void;
  onDragEnd: () => void;
};

function Whiteboard({
  whiteboard,
  title,
  children,
  icon,
  util,
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
      {whiteboard ? (
        <>
          <Optionbar />
          <ContentWrapper>{children}</ContentWrapper>
        </>
      ) : (
        <>{children}</>
      )}
      {util}
    </WhiteboardLayout>
  );
}

export default Whiteboard;

const WhiteboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  background: ${theme.colors.white};
  box-shadow: 2px 2px 0px 0px #000000 inset, -2px -2px 0px 0px #c1c1c1 inset,
    1px 1px 0px 0px #808080 inset, -1px -1px 0px 0px #ffffff inset;
`;
