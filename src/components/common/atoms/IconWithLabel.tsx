'use client';

import { theme } from '@/styles/theme';
import emotionStyled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { w95fa } from '../../../../public/font/font';

type IconWithLabelProps = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

function IconWithLabel({ icon, label, onClick }: IconWithLabelProps) {
  const [clickCount, setClickCount] = useState(0);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (clickCount === 1) {
        setClick(!click);
        setClickCount(0);
      }
    }, 300);

    if (clickCount === 2) {
      onClick();
      setClickCount(0);
    }

    return () => clearTimeout(timer);
  }, [clickCount, click]);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <Wrapper className={w95fa.className} onClick={handleClick}>
      {icon}
      <LabelWrapper click={click}>{label}</LabelWrapper>
    </Wrapper>
  );
}

export default IconWithLabel;

const Wrapper = emotionStyled.div`
width: 60px;
height: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 6px;
cursor: pointer;
`;

const LabelWrapper = emotionStyled.div<{ click: boolean }>`
color: ${theme.colors.white};
background: ${({ click }) => click && `${theme.colors.secondary}`};
outline: ${({ click }) => click && `1px dotted ${theme.colors.black}`};
`;
