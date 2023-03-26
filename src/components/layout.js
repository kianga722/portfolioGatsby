import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  background: 'rgba(48, 56, 60, 0.9)',
  black: '#000',
  text: '#fff',
  brandTextColor: '#1fffff',
  highlight: '#1aec08'
}

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  )
}