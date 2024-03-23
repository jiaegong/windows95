'use client';

import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { w95fa } from '../../../../public/font/font';

type IconWithLabelProps = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

function IconWithLabel({ icon, label, onClick }: IconWithLabelProps) {
  const [clickCount, setClickCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (clickCount === 1) {
        setClicked(!clicked);
        setClickCount(0);
      }
    }, 300);

    if (clickCount === 2) {
      onClick();
      setClickCount(0);
    }

    return () => clearTimeout(timer);
  }, [clickCount, clicked]);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <Wrapper className={w95fa.className} onClick={handleClick}>
      {icon}
      <LabelWrapper clicked={clicked}>{label}</LabelWrapper>
    </Wrapper>
  );
}

export default IconWithLabel;

const Wrapper = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const LabelWrapper = styled.div<{ clicked: boolean }>`
  color: ${theme.colors.white};
  background: ${({ clicked }) => clicked && `${theme.colors.secondary}`};
  outline: ${({ clicked }) => clicked && `1px dotted ${theme.colors.black}`};
`;
