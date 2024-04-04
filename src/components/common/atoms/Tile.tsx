import styled from '@emotion/styled';
import React, { useState } from 'react';
import DefaultTile from './icons/DefaultTile';

export enum Status {
  HIDDEN = 'hidden',
  MINE = 'mine',
  NUMBER = 'number',
  MARKED = 'marked',
}

type TileData = {
  x: number;
  y: number;
  mine: boolean;
};

function Tile({ data, board }: { data: TileData; board: TileData[][] }) {
  const [status, setStatus] = useState<Status>(Status.HIDDEN);
  const [number, setNumber] = useState<number | null>(null);

  const openTile = () => {
    if (status !== Status.HIDDEN) return;

    if (data.mine) {
      setStatus(Status.MINE);
      return;
    }

    setStatus(Status.NUMBER);

    const adjacentTiles = nearbyTiles();
    const mines = adjacentTiles.filter((m) => m.mine);
    if (mines.length === 0) {
      // No mines
    } else {
      setNumber(mines.length);
      console.log(mines.length);
    }
  };

  const markedTile = (e: React.MouseEvent) => {
    e.preventDefault();
    if (status === Status.HIDDEN) {
      setStatus(Status.MARKED);
    }
    if (status === Status.MARKED) {
      setStatus(Status.HIDDEN);
    }
  };

  const nearbyTiles = () => {
    const tiles = [];

    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        const tile = board[data.x + xOffset]?.[data.y + yOffset];
        if (tile) tiles.push(tile);
      }
    }

    return tiles;
  };

  return (
    <TileWrapper onClick={openTile} onContextMenu={markedTile}>
      <DefaultTile status={status} number={number} />
    </TileWrapper>
  );
}

export default Tile;

const TileWrapper = styled.div`
  width: 20px;
  height: 20px;
`;
