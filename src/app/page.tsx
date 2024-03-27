'use client';

import IconWithLabel from '@/components/common/atoms/IconWithLabel';
import Folder from '@/components/common/atoms/icons/Folder';
import InternetExplorer from '@/components/common/atoms/icons/InternetExplorer';
import Notepad from '@/components/common/atoms/icons/Notepad';
import Paint from '@/components/common/atoms/icons/Paint';
import NotepadModal from '@/components/common/organisms/NotepadModal';
import PaintModal from '@/components/common/organisms/PaintModal';
import useModalStore from '@/store/useModalStore';
import styled from '@emotion/styled';

export default function Home() {
  const { setModal, getAllModals } = useModalStore();

  console.log(getAllModals());

  return (
    <main>
      <ProgramSection>
        <IconWithLabel icon={<Folder />} label='Folder' onClick={() => {}} />
        <IconWithLabel
          icon={<InternetExplorer />}
          label='Internet'
          onClick={() => {}}
        />
        <IconWithLabel
          icon={<Paint />}
          label='Paint'
          onClick={() => {
            setModal('paint', { open: true });
          }}
        />
        <IconWithLabel
          icon={<Notepad />}
          label='Notepad'
          onClick={() => {
            setModal('notepad', { open: true });
          }}
        />
        <PaintModal />
        <NotepadModal />
      </ProgramSection>
    </main>
  );
}

const ProgramSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
