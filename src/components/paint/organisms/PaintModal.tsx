import React, { useState } from 'react';
import Modal from '../../common/molecules/modal/Modal';
import Paint from '../../common/atoms/icons/Paint';
import Canvas from '../molecules/Canvas';
import Palette from '../molecules/Palette';

function PaintModal() {
  const [color, setColor] = useState<string>('#000000');

  const handleColor = (hex: string) => {
    setColor(hex);
  };

  return (
    <Modal
      id='paint'
      title='Paint'
      icon={<Paint size={16} />}
      util={<Palette handleColor={handleColor} />}
      offset={{ x: 480, y: 80 }}
    >
      <Canvas color={color} />
    </Modal>
  );
}

export default PaintModal;
