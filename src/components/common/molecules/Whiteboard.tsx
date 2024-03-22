'use client';

import { theme } from '@/styles/theme';
import emotionStyled from '@emotion/styled';
import React from 'react';
import Titlebar from './Titlebar';

type WhiteboardProps = {
  title: string;
  children: React.ReactNode;
};

function Whiteboard({ title, children }: WhiteboardProps) {
  return (
    <WhiteboardLayout>
      <Titlebar>{title}</Titlebar>
      <ContentWrapper>{children}</ContentWrapper>
    </WhiteboardLayout>
  );
}

export default Whiteboard;

const WhiteboardLayout = emotionStyled.div`
width: fit-content;
display: flex;
flex-direction: column;
gap: 4px;
padding: 4px;
background: ${theme.colors.gray01};
box-shadow: 2px 2px 0px 0px #DFDFDF inset, -2px -2px 0px 0px #7F7F7F inset, 1px 1px 0px 0px #FFFFFF inset, -1px -1px 0px 0px #000000 inset;
`;

const ContentWrapper = emotionStyled.div`
width: 100%;
height: 100%;
padding: 8px;
background: ${theme.colors.white};
box-shadow: 2px 2px 0px 0px #000000 inset, -2px -2px 0px 0px #C1C1C1 inset, 1px 1px 0px 0px #808080 inset, -1px -1px 0px 0px #FFFFFF inset;
`;
