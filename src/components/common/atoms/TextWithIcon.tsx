'use client';

import emotionStyled from '@emotion/styled';
import React from 'react';
import { w95fa } from '../../../../public/font/font';
import { theme } from '@/styles/theme';

type TextWithIconProps = {
  children: string;
  icon: React.ReactNode;
  bold?: boolean;
  color?: string;
};

function TextWithIcon({
  children,
  icon,
  bold,
  color = theme.colors.black,
}: TextWithIconProps) {
  return (
    <Wrapper className={w95fa.className} bold={bold} color={color}>
      {icon}
      {children}
    </Wrapper>
  );
}

export default TextWithIcon;

const Wrapper = emotionStyled.div<{ bold?: boolean; color?: string }>`
display: flex;
justify-content: center;
align-items: center;
gap: 4px;
font-weight: ${({ bold }) => (bold ? 700 : 400)};
color: ${({ color }) => color};
`;
