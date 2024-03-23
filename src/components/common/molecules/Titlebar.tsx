'use client';

import styled from '@emotion/styled';
import React from 'react';
import TextWithIcon from '../atoms/TextWithIcon';
import ControlButton from '../atoms/buttons/ControlButton';
import { theme } from '@/styles/theme';

function Titlebar({
  children,
  icon,
  onClose,
}: {
  children: string;
  icon: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <TitlebarLayout>
      <TextWithIcon icon={icon} color={theme.colors.white}>
        {children}
      </TextWithIcon>
      <ButtonContainer>
        <ControlButton type='minimize' />
        <ControlButton type='maximize' />
        <ControlButton type='close' onClick={onClose} />
      </ButtonContainer>
    </TitlebarLayout>
  );
}

export default Titlebar;

const TitlebarLayout = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 4px;
  background: ${theme.colors.secondary};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2px;
`;
