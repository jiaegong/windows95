import React from 'react';
import CloseIcon from '../icons/CloseIcon';
import MaximizeIcon from '../icons/MaximizeIcon';
import MinimizeIcon from '../icons/MinimizeIcon';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

const controlIcon = {
  close: <CloseIcon />,
  maximize: <MaximizeIcon />,
  minimize: <MinimizeIcon />,
};

function ControlButton({
  type,
  onClick,
}: {
  type: 'close' | 'maximize' | 'minimize';
  onClick?: () => void;
}) {
  return <IconWrapper onClick={onClick}>{controlIcon[type]}</IconWrapper>;
}

export default ControlButton;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  padding: 6 16;
  background: ${theme.colors.gray01};
  border: 1px solid ${theme.colors.black};
  box-shadow: 2px 2px 0px 0px #dfdfdf inset, -2px -2px 0px 0px #7f7f7f inset,
    1px 1px 0px 0px #ffffff inset, -1px -1px 0px 0px #000000 inset;
  display: flex;
  justify-content: center;
  align-items: center;

  :active {
    box-shadow: 2px 2px 0px 0px #808080 inset, -2px -2px 0px 0px #c4c4c4 inset,
      1px 1px 0px 0px #000000 inset, -1px -1px 0px 0px #ffffff inset;
  }
`;
