import { css, Global } from '@emotion/core';
import App from 'next/app';
import React from 'react';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';
import PageContent from '../elements/PageContent';
import { color, font } from '../styles/theme';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: ${font('sansSerif')};
    color: ${color('text')};
    margin: 0;
    padding: 0;

    > div {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
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
        <PageContent>
          <Component {...pageProps} />
        </PageContent>
        <GlobalFooter />
      </>
    );
  }
}
