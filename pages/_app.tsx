import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import App from 'next/app';
import React from 'react';
import theme from '../styles/theme';

const globalStyles = theme => css`
  body {
    font-family: ${theme.fonts.sansSerif};
    margin: 0;
    padding: 0;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
