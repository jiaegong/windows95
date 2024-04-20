'use client';

import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React from 'react';
import {
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
} from './icons/boardnumbers';

const boardNumber: { [key: string]: React.ReactElement } = {
  0: <Zero />,
  1: <One />,
  2: <Two />,
  3: <Three />,
  4: <Four />,
  5: <Five />,
  6: <Six />,
  7: <Seven />,
  8: <Eight />,
  9: <Nine />,
};

function Billboard({ number }: { number: number }) {
  const renderNumber = (number: number) => {
    const numberString = number.toString().padStart(3, '0');
    return numberString
      .split('')
      .map((digit, index) => <span key={index}>{boardNumber[digit]}</span>);
  };

  return <Wrappper>{renderNumber(number)}</Wrappper>;
}

export default Billboard;

const Wrappper = styled.div`
  width: fit-content;
  height: 26px;
  background: ${theme.colors.black};
  display: flex;
  gap: 2px;
`;
