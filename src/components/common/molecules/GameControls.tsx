import React from 'react';
import { GameResult } from '../organisms/Minesweeper';
import Standard from '../atoms/icons/smileyfaces/Standard';
import Win from '../atoms/icons/smileyfaces/Win';
import Lose from '../atoms/icons/smileyfaces/Lose';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import Timer from './Timer';
import Billboard from '../atoms/Billboard';

const smileyFace: { [key in GameResult]: React.ReactNode } = {
  win: <Win />,
  lose: <Lose />,
  standard: <Standard />,
};

function GameControls({
  result,
  handleReset,
  isRunning,
}: {
  result: GameResult;
  handleReset: () => void;
  isRunning: boolean;
}) {
  return (
    <Layout>
      <Billboard number={10} />
      <GameButton
        onClick={() => {
          handleReset();
        }}
      >
        {smileyFace[result]}
      </GameButton>
      <Timer isRunning={isRunning} />
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
