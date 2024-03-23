'use client';

import React from 'react';
import styled from '@emotion/styled';
import DefaultButton from '../atoms/buttons/DefaultButton';
import TextWithIcon from '../atoms/TextWithIcon';
import Start from '../atoms/icons/Start';
import { theme } from '@/styles/theme';
import Frame from '../atoms/Frame';

function Navbar() {
  return (
    <NavbarLayout>
      <Dropdown>
        <Frame>
          <InnerWrapper></InnerWrapper>
        </Frame>
      </Dropdown>
      <DefaultButton>
        <TextWithIcon icon={<Start size={16} />} bold>
          Start
        </TextWithIcon>
      </DefaultButton>
    </NavbarLayout>
  );
}

export default Navbar;

const NavbarLayout = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 22px;
  background: ${theme.colors.gray01};
`;

const Dropdown = styled.div`
  position: absolute;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div``;
