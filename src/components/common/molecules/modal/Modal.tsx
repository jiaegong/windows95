'use client';

import React from 'react';
import Portal from './Portal';
import styled from '@emotion/styled';
import useModalStore from '@/store/useModalStore';
import Whiteboard from '../Whiteboard';
import Folder from '../../atoms/icons/Folder';

type ModalProps = {
  id: string;
  children: React.ReactNode;
  closeCallback?: () => void;
  title?: string;
  icon?: React.ReactNode;
};

function Modal({
  id,
  children,
  closeCallback,
  title = 'Folder',
  icon = <Folder />,
}: ModalProps) {
  const { setModal, getModalState } = useModalStore();
  const isOpen = getModalState(id)?.open || false;

  const onClose = () => {
    if (closeCallback) {
      closeCallback();
    }
    setModal(id, { open: false });
  };

  return (
    <Portal>
      {isOpen && (
        <ModalLayout onClick={(e) => e.stopPropagation()}>
          <Whiteboard title={title} icon={icon} onClose={onClose}>
            {children}
          </Whiteboard>
        </ModalLayout>
      )}
    </Portal>
  );
}

export default Modal;

const ModalLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
