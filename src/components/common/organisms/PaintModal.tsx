import React from 'react';
import Modal from '../molecules/modal/Modal';
import styled from '@emotion/styled';
import Paint from '../atoms/icons/Paint';

function PaintModal() {
  return (
    <Modal id='paint' title='Paint' icon={<Paint size={16} />}>
      <Canvas />
    </Modal>
  );
}

export default PaintModal;

const Canvas = styled.div`
  width: 30vw;
  height: 40vh;
  border: none;
  outline: none;
`;
