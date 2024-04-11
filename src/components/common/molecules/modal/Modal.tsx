'use client';

import React, { createContext, useEffect, useRef, useState } from 'react';
import Portal from './Portal';
import styled from '@emotion/styled';
import useModalStore from '@/store/useModalStore';
import Whiteboard from '../Whiteboard';
import Folder from '../../atoms/icons/Folder';
import { theme } from '@/styles/theme';
import Titlebar from '../Titlebar';

type Position = {
  x: number;
  y: number;
};

type ModalProps = {
  id: string;
  children: React.ReactNode;
  closeCallback?: () => void;
  title?: string;
  icon?: React.ReactNode;
  util?: React.ReactNode;
  offset?: Position;
  whiteboard?: boolean;
  saveFile?: () => void;
};

export const ModalContext = createContext(() => {});

function Modal({
  id,
  children,
  closeCallback,
  title = 'Folder',
  icon = <Folder size={16} />,
  util,
  offset = {
    x: 480,
    y: 160,
  },
  whiteboard = true,
  saveFile = () => {},
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>(offset);
  const [initialPosition, setInitialPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [isDraggable, setIsDraggable] = useState(false);
  const { setModal, getModalState } = useModalStore();
  const isOpen = getModalState(id)?.open || false;

  const onClose = () => {
    if (closeCallback) {
      closeCallback();
    }
    setModal(id, { open: false });
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setInitialPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (!isDraggable) setIsDraggable(true);
    if (e.clientX !== 0 && e.clientY !== 0) {
      const newX = e.clientX - initialPosition.x;
      const newY = e.clientY - initialPosition.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setInitialPosition({ ...position });
  };

  return (
    <Portal>
      {isOpen && (
        <ModalContext.Provider value={saveFile}>
          <ModalLayout
            ref={ref}
            draggable={isDraggable}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrag={handleDrag}
            onClick={(e) => e.stopPropagation()}
            style={{
              top: `${position.y}px`,
              left: `${position.x}px`,
            }}
          >
            <Whiteboard
              whiteboard={whiteboard}
              title={title}
              icon={icon}
              util={util}
              onClose={onClose}
              onDragStart={() => setIsDraggable(true)}
              onDragEnd={() => setIsDraggable(false)}
            >
              {children}
            </Whiteboard>
          </ModalLayout>
        </ModalContext.Provider>
      )}
    </Portal>
  );
}

export default Modal;

const ModalLayout = styled.div`
  position: fixed;
  width: fit-content;
  padding: 4px;
  background: ${theme.colors.gray01};
  box-shadow: 2px 2px 0px 0px #dfdfdf inset, -2px -2px 0px 0px #7f7f7f inset,
    1px 1px 0px 0px #ffffff inset, -1px -1px 0px 0px #000000 inset;
`;
