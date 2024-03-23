import React from 'react';
import Modal from '../molecules/modal/Modal';
import Notepad from '../atoms/icons/Notepad';
import styled from '@emotion/styled';

function NotepadModal() {
  return (
    <Modal id='notepad' title='Notepad' icon={<Notepad size={16} />}>
      <Textarea />
    </Modal>
  );
}

export default NotepadModal;

const Textarea = styled.textarea`
  width: 30vw;
  height: 40vh;
  border: none;
  outline: none;
`;
