import React from 'react';
import { GameResult } from '../organisms/Minesweeper';
import Standard from '../atoms/icons/smileyfaces/Standard';
import Win from '../atoms/icons/smileyfaces/Win';
import Lose from '../atoms/icons/smileyfaces/Lose';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
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
} from '../atoms/icons/boardnumbers';

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

const smileyFace: { [key in GameResult]: React.ReactNode } = {
  win: <Win />,
  lose: <Lose />,
  standard: <Standard />,
};

function GameControls({
  result,
  handleReset,
}: {
  result: GameResult;
  handleReset: () => void;
}) {
  const renderNumber = (number: number) => {
    const numberString = number.toString().padStart(3, '0');
    return numberString
      .split('')
      .map((digit, index) => <span key={index}>{boardNumber[digit]}</span>);
  };

  return (
    <Layout>
      <Billboard>{renderNumber(10)}</Billboard>
      <GameButton onClick={handleReset}>{smileyFace[result]}</GameButton>
      <Billboard>{renderNumber(100)}</Billboard>
    </Layout>
  );
}

export default GameControls;

const Layout = styled.div`
  width: 100%;
  height: 44px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  box-shadow: 2px 2px 0px 0px #808080 inset, -2px -2px 0px 0px #c4c4c4 inset,
    1px 1px 0px 0px #000000 inset, -1px -1px 0px 0px #ffffff inset;
`;

const GameButton = styled.button`
  width: 26px;
  height: 26px;
  background: ${theme.colors.gray01};
  box-shadow: 2px 2px 0px 0px #dfdfdf inset, -2px -2px 0px 0px #7f7f7f inset,
    1px 1px 0px 0px #ffffff inset, -1px -1px 0px 0px #000000 inset;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Billboard = styled.div`
  width: fit-content;
  height: 26px;
  background: ${theme.colors.black};
  display: flex;
  gap: 2px;
`;
