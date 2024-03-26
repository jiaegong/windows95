'use client';

import styled from '@emotion/styled';
import React, { ComponentProps } from 'react';
import TextWithIcon from '../atoms/TextWithIcon';
import ControlButton from '../atoms/buttons/ControlButton';
import { theme } from '@/styles/theme';

function Titlebar({
  children,
  icon,
  onClose,
  ...props
}: {
  children: string;
  icon: React.ReactNode;
  onClose: () => void;
} & ComponentProps<'div'>) {
  return (
    <TitlebarLayout {...props}>
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
