import React from 'react';
import { GameResult } from '../organisms/Minesweeper';
import Standard from '../atoms/icons/smileyfaces/Standard';
import Win from '../atoms/icons/smileyfaces/Win';
import Lose from '../atoms/icons/smileyfaces/Lose';

const smileyFace: { [key in GameResult]: React.ReactNode } = {
  win: <Win />,
  lose: <Lose />,
  standard: <Standard />,
};

function Gameboard({ result }: { result: GameResult }) {
  return <div>{smileyFace[result]}</div>;
}

export default Gameboard;
