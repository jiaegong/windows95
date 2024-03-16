import React from 'react';
import Frame from '../Frame';
import CloseIcon from '../icons/CloseIcon';
import MaximizeIcon from '../icons/MaximizeIcon';
import MinimizeIcon from '../icons/MinimizeIcon';

const controlIcon = {
  close: <CloseIcon />,
  maximize: <MaximizeIcon />,
  minimize: <MinimizeIcon />,
};

function ControlButton({ type }: { type: 'close' | 'maximize' | 'minimize' }) {
  return (
    <Frame width='16px' height='16px'>
      {controlIcon[type]}
    </Frame>
  );
}

export default ControlButton;
