import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  background: '#F5F5F5',
  navBackground: '#abcbff',
  text: '#3a3a3a',
  cardBackground: '#f1fdff',
  highlight: '#0e5e17',
  border: '#dfdfdf',
  backgroundDark: '#282c35',
  navBackgroundDark: '#5012aa',
  textDark: '#d2e5e6',
  textTitleDark: '#AA84E1',
  cardBackgroundDark: '#010120',
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