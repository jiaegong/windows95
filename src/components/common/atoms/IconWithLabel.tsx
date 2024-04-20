'use client';

import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { w95fa } from '../../../../public/font/font';

type IconWithLabelProps = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

function IconWithLabel({ icon, label, onClick }: IconWithLabelProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <Wrapper
      className={w95fa.className}
      onDoubleClick={onClick}
      onDoubleClickCapture={() => setClicked(true)}
      onBlur={() => setClicked(false)}
      tabIndex={0}
    >
      {icon}
      <LabelWrapper clicked={clicked}>
        <Label clicked={clicked}>{label}</Label>
      </LabelWrapper>
    </Wrapper>
  );
}

export default IconWithLabel;

const Wrapper = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const LabelWrapper = styled.div<{ clicked: boolean }>`
  text-align: center;
  user-select: none;
`;

const Label = styled.span<{ clicked: boolean }>`
  color: ${theme.colors.white};
  background: ${({ clicked }) => clicked && `${theme.colors.secondary}`};
  outline: ${({ clicked }) => clicked && `1px dotted ${theme.colors.black}`};
`;
