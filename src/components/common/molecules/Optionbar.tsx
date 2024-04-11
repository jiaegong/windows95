'use client';

import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ModalContext } from './modal/Modal';

function Optionbar() {
  const saveFile = useContext(ModalContext);

  const options = [
    {
      name: 'File',
      function: saveFile,
    },
    {
      name: 'Edit',
    },
  ];

  return (
    <OptionbarLayout>
      {options.map((option, idx) => (
        <Option key={idx} onClick={option.function}>
          {option.name}
        </Option>
      ))}
    </OptionbarLayout>
  );
}

export default Optionbar;

const OptionbarLayout = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Option = styled.div`
  width: fit-content;
  padding: 4px 8px;
  cursor: default;

  :active {
    box-shadow: 2px 2px 0px 0px #808080 inset, -2px -2px 0px 0px #c4c4c4 inset,
      1px 1px 0px 0px #000000 inset, -1px -1px 0px 0px #ffffff inset;
  }
`;
