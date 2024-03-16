'use client';

import React from 'react';
import emotionStyled from '@emotion/styled';
import DefaultButton from '../atoms/buttons/DefaultButton';
import TextWithIcon from '../atoms/TextWithIcon';
import Start from '../atoms/icons/Start';
import { theme } from '@/styles/theme';

function Navbar() {
  return (
    <NavbarLayout>
      <DefaultButton>
        <TextWithIcon icon={<Start size={16} />} bold>
          Start
        </TextWithIcon>
      </DefaultButton>
    </NavbarLayout>
  );
}

export default Navbar;

const NavbarLayout = emotionStyled.nav`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 22px;
background: ${theme.colors.gray01};
`;
