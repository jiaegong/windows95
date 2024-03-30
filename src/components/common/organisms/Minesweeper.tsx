import React from 'react';
import Modal from '../molecules/modal/Modal';
import Bomb from '../atoms/icons/Bomb';
import Tile from '../atoms/Tile';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 3;

function Minesweeper() {
  const createBoard = (boardSize: number, numberOfMines: number) => {
    const board = [];
    const minePositions = getMinePositions(boardSize, numberOfMines);

    for (let x = 0; x < boardSize; x++) {
      const row = [];
      for (let y = 0; y < boardSize; y++) {
        const tile = {
          x,
          y,
          mine: minePositions.some(positionMatch.bind(null, { x, y })),
        };
        row.push(tile);
      }
      board.push(row);
    }
    return board;
  };

  const getMinePositions = (boardSize: number, numberOfMines: number) => {
    const positions: { x: number; y: number }[] = [];

    while (positions.length < numberOfMines) {
      const position = {
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize),
      };

      if (!positions.some(positionMatch.bind(null, position))) {
        positions.push(position);
      }
    }

    return positions;
  };

  const positionMatch = (
    a: { x: number; y: number },
    b: { x: number; y: number }
  ) => {
    return a.x === b.x && a.y === b.y;
  };

  const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
  console.log(board);

  return (
    <Modal
      id='minesweeper'
      title='Minesweeper'
      icon={<Bomb size={16} />}
      whiteboard={false}
    >
      <BoardContainer size={BOARD_SIZE}>
        {board.map((row) => {
          return row.map((cell, idx) => <Tile key={idx} data={cell} />);
        })}
      </BoardContainer>
    </Modal>
  );
}

export default Minesweeper;

const BoardContainer = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: ${({ size }) => `repeat(${size}, 1fr)`};
  background: ${theme.colors.gray01};
  padding: 8px;
`;
