import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  mobileWidth: '768px',
  background: '#F5F5F5',
  black: '#3a3a3a',
  white: '#f1fdff',
  lightBlue: '#abcbff',
  darkBlue: '#808c9f',
  red: '#e2000e',
  lightGray: '#dfdfdf'
}

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  )
}