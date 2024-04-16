import React, { useEffect, useState } from 'react';
import Modal from '../molecules/modal/Modal';
import Bomb from '../atoms/icons/Bomb';
import Tile from '../atoms/Tile';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;

export enum Status {
  HIDDEN = 'hidden',
  MINE = 'mine',
  NUMBER = 'number',
  MARKED = 'marked',
}

export type TileData = {
  x: number;
  y: number;
  mine: boolean;
  status: Status;
  open: boolean;
  number?: number;
};

function Minesweeper() {
  const [board, setBoard] = useState<TileData[][]>([]);

  useEffect(() => {
    createBoard(BOARD_SIZE, NUMBER_OF_MINES);
  }, []);

  const createBoard = (boardSize: number, numberOfMines: number) => {
    const newBoard = [];
    const minePositions = getMinePositions(boardSize, numberOfMines);

    for (let x = 0; x < boardSize; x++) {
      const row = [];
      for (let y = 0; y < boardSize; y++) {
        const tile = {
          x,
          y,
          mine: minePositions.some(positionMatch.bind(null, { x, y })),
          status: Status.HIDDEN,
          open: false,
        };
        row.push(tile);
      }
      newBoard.push(row);
    }

    setBoard(newBoard);
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

  const openTile = (cell: TileData) => {
    const currentTile = board[cell.x][cell.y];
    // If the tile is already open, then return early.
    if (currentTile.open) return;

    const updatedBoard = [...board];
    const updatedTile = updatedBoard[cell.x][cell.y];

    updatedTile.open = true;

    if (updatedTile.mine) {
      updatedTile.status = Status.MINE;
    } else {
      updatedTile.status = Status.NUMBER;
    }

    const adjacentTiles = nearbyTiles(updatedTile);
    const mines = adjacentTiles.filter((m) => m.mine);

    // If there's no mines nearby, then open all the other nearby tiles with no mines nearby.
    if (mines.length === 0) {
      adjacentTiles.forEach((adjTile) => {
        console.log(adjTile);
        if (adjTile.open) return;
        openTile(adjTile);
      });
    } else {
      updatedTile.number = mines.length;
    }

    updatedBoard[updatedTile.x][updatedTile.y] = updatedTile;

    setBoard(updatedBoard);
  };

  const markedTile = (tile: TileData) => {
    const updatedBoard = [...board];
    const updatedTile = { ...tile };
    if (tile.status === Status.HIDDEN) {
      updatedTile.status = Status.MARKED;
    }
    if (tile.status === Status.MARKED) {
      updatedTile.status = Status.HIDDEN;
    }
    updatedBoard[tile.x][tile.y] = updatedTile;
    setBoard(updatedBoard);
  };

  const nearbyTiles = ({ x, y }: { x: number; y: number }) => {
    const tiles = [];

    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        const tile = board[x + xOffset]?.[y + yOffset];
        if (tile) tiles.push(tile);
      }
    }

    return tiles;
  };

  return (
    <Modal
      id='minesweeper'
      title='Minesweeper'
      icon={<Bomb size={16} />}
      whiteboard={false}
    >
      <BoardContainer size={BOARD_SIZE}>
        {board.map((row) => {
          return row.map((cell, idx) => (
            <Tile
              key={idx}
              data={cell}
              onClick={() => openTile(cell)}
              onContextMenu={(e: React.MouseEvent) => {
                e.preventDefault();
                markedTile(cell);
              }}
            />
          ));
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
