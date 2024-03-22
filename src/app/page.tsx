'use client';

import IconWithLabel from '@/components/common/atoms/IconWithLabel';
import Folder from '@/components/common/atoms/icons/Folder';
import InternetExplorer from '@/components/common/atoms/icons/InternetExplorer';
import Notepad from '@/components/common/atoms/icons/Notepad';
import Paint from '@/components/common/atoms/icons/Paint';
import emotionStyled from '@emotion/styled';

export default function Home() {
  return (
    <main>
      <ProgramSection>
        <IconWithLabel icon={<Folder />} label='Folder' onClick={() => {}} />
        <IconWithLabel
          icon={<InternetExplorer />}
          label='Internet'
          onClick={() => {}}
        />
        <IconWithLabel icon={<Paint />} label='Paint' onClick={() => {}} />
        <IconWithLabel icon={<Notepad />} label='Notepad' onClick={() => {}} />
      </ProgramSection>
    </main>
  );
}

const ProgramSection = emotionStyled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;
