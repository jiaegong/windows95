import React, { useState } from 'react';
import Modal from '../molecules/modal/Modal';
import Paint from '../atoms/icons/Paint';
import Canvas from '../molecules/Canvas';
import Palette from '../molecules/Palette';

function PaintModal() {
  const [color, setColor] = useState<string>('#000000');

  return (
    <Modal
      id='paint'
      title='Paint'
      icon={<Paint size={16} />}
      offset={{ x: 480, y: 120 }}
    >
      <Canvas color={color} />
      <Palette handleColor={setColor} />
    </Modal>
  );
}

export default PaintModal;
