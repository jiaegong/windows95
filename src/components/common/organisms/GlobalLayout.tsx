'use client';

import React from 'react';
import Navbar from './Navbar';
import emotionStyled from '@emotion/styled';
import { theme } from '@/styles/theme';

function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      {children}
      <Navbar />
    </Layout>
  );
}

export default GlobalLayout;

const Layout = emotionStyled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
background: ${theme.colors.primary};
`;
