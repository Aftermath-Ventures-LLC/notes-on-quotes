import { css, Global } from '@emotion/core';
import App from 'next/app';
import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import { color, font } from '../styles/theme';

const globalStyles = css`
  body {
    font-family: ${font('sansSerif')};
    color: ${color('text')};
    margin: 0;
    padding: 0;
  }

  a {
    color: ${color('accent')};

    &:hover {
      text-decoration: none;
    }
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Global styles={globalStyles} />
        <GlobalHeader />
        <Component {...pageProps} />
      </>
    );
  }
}
