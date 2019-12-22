import Head from 'next/head';
import React from 'react';
import ArticlePreview from '../components/ArticlePreview';
import Container from '../elements/Container';

const Home = () => {
  return (
    <>
      <Head>
        <title>Notes on Quotes</title>
      </Head>
      <Container>
        <ArticlePreview slug="pete-adeney-quotes-henry-david-thoreau" />
        <ArticlePreview slug="pete-adeney-quotes-henry-david-thoreau" />
        <ArticlePreview slug="pete-adeney-quotes-henry-david-thoreau" />
      </Container>
    </>
  );
};

export default Home;
