import React, { useState } from 'react';
import Modal from '../molecules/modal/Modal';
import Notepad from '../atoms/icons/Notepad';
import styled from '@emotion/styled';

function NotepadModal() {
  const [text, setText] = useState('');

  const saveFile = () => {
    localStorage.setItem('notepad', text);
  };

  return (
    <Modal
      id='notepad'
      title='Notepad'
      icon={<Notepad size={16} />}
      saveFile={saveFile}
    >
      <Textarea onChange={(e) => setText(e.target.value)} />
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
