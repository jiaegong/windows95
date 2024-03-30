import styled from '@emotion/styled';
import React, { useState } from 'react';
import DefaultTile from './icons/DefaultTile';

enum Status {
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

function Tile({ data }: { data: TileData }) {
  const [status, setStatus] = useState<Status>(Status.HIDDEN);

  const handleStatus = () => {};

  return (
    <TileWrapper onClick={handleStatus}>
      <DefaultTile />
    </TileWrapper>
  );
}

export default Tile;

const TileWrapper = styled.div`
  width: 20px;
  height: 20px;
`;
