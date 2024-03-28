import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React from 'react';

const colors = [
  { name: 'black', hex: '#000000' },
  { name: 'gray', hex: '#808080' },
  { name: 'maroon', hex: '#800000' },
  { name: 'olive', hex: '#808000' },
  { name: 'green', hex: '#008000' },
  { name: 'teal', hex: '#008080' },
  { name: 'navy', hex: '#000080' },
  { name: 'purple', hex: '#800080' },
  { name: 'dark khaki', hex: '#BDB76B' },
  { name: 'dodger blue', hex: '#1E90FF' },
  { name: 'midnight blue', hex: '#191970' },
  { name: 'brown', hex: '#A52A2A' },
  { name: 'white', hex: '#FFFFFF' },
  { name: 'silver', hex: '#C0C0C0' },
  { name: 'red', hex: '#FF0000' },
  { name: 'yellow', hex: '#FFFF00' },
  { name: 'lime', hex: '#00FF00' },
  { name: 'aqua', hex: '#00FFFF' },
  { name: 'blue', hex: '#0000FF' },
  { name: 'magenta', hex: '#FF00FF' },
  { name: 'aquamarine', hex: '#7FFFD4' },
  { name: 'medium purple', hex: '#9370DB' },
  { name: 'deep pink', hex: '#FF1493' },
  { name: 'orange red', hex: '#FF4500' },
];

function Palette({ handleColor }: { handleColor: (hex: string) => void }) {
  return (
    <PaletteLayout>
      <ColorContainer>
        {colors.map((color, idx) => (
          <ColorTile
            key={idx}
            hex={color.hex}
            onClick={() => handleColor(color.hex)}
          />
        ))}
      </ColorContainer>
    </PaletteLayout>
  );
}

export default Palette;

const PaletteLayout = styled.div`
  width: 100%;
  background: ${theme.colors.gray01};
  padding: 4px;
`;

const ColorContainer = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const ColorTile = styled.div<{ hex: string }>`
  width: 20px;
  height: 20px;
  box-shadow: 2px 2px 0px 0px #000000 inset, -2px -2px 0px 0px #c1c1c1 inset,
    1px 1px 0px 0px #808080 inset, -1px -1px 0px 0px #ffffff inset;
  background: ${({ hex }) => hex};
  border: 1px solid ${theme.colors.gray01};
  cursor: pointer;
`;
