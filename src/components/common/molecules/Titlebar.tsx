'use client';

import emotionStyled from '@emotion/styled';
import React from 'react';
import TextWithIcon from '../atoms/TextWithIcon';
import Folder from '../atoms/icons/Folder';
import ControlButton from '../atoms/buttons/ControlButton';
import { theme } from '@/styles/theme';

function Titlebar({ children }: { children: string }) {
  return (
    <TitlebarLayout>
      <TextWithIcon icon={<Folder size={16} />} color={theme.colors.white}>
        {children}
      </TextWithIcon>
      <ButtonContainer>
        <ControlButton type='minimize' />
        <ControlButton type='maximize' />
        <ControlButton type='close' />
      </ButtonContainer>
    </TitlebarLayout>
  );
}

export default Titlebar;

const TitlebarLayout = emotionStyled.div`
width: 200px;
height: 20px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2px 2px 2px 4px;
background: ${theme.colors.secondary};
`;

const ButtonContainer = emotionStyled.div`
display: flex;
gap: 2px;
`;
