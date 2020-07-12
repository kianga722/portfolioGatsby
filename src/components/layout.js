import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      {children}
      <GlobalStyles />
    </React.Fragment>
  )
}