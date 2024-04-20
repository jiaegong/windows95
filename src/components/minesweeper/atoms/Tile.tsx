import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import DefaultTile from './icons/DefaultTile';
import { TileData } from '../organisms/Minesweeper';

type TileProps = {
  data: TileData;
  onClick: () => void;
  onContextMenu: (e: React.MouseEvent) => void;
};

function Tile({ data, onClick, onContextMenu }: TileProps) {
  return (
    <TileWrapper onClick={onClick} onContextMenu={onContextMenu}>
      <DefaultTile status={data.status} number={data.number || null} />
    </TileWrapper>
  );
}

export default Tile;

const TileWrapper = styled.div`
  width: 20px;
  height: 20px;
`;
