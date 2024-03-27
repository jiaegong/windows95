import React from 'react';
import Modal from '../molecules/modal/Modal';
import Paint from '../atoms/icons/Paint';
import Canvas from '../molecules/Canvas';

function PaintModal() {
  return (
    <Modal
      id='paint'
      title='Paint'
      icon={<Paint size={16} />}
      offset={{ x: 480, y: 120 }}
    >
      <Canvas />
    </Modal>
  );
}

export default PaintModal;
