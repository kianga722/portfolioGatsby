import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  mobileWidth: '768px',
  background: '#F5F5F5',
  text: '#3a3a3a',
  cardBackground: '#f1fdff',
  navBackground: '#abcbff',
  underline: '#808c9f',
  highlight: '#e2000e',
  border: '#dfdfdf',
  backgroundDark: '#282c35',
  textDark: '#d2e5e6',
  cardBackgroundDark: '#010120',
  navBackgroundDark: '#5012aa',
  highlightDark: '#89ff7f',
}

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  )
}