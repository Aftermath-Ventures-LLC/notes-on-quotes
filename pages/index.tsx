import Head from 'next/head';
import React from 'react';
import ArticlePreview from '../components/ArticlePreview';
import Hero from '../components/Hero';
import Container from '../elements/Container';
import ArticleContainer from '../elements/ArticleContainer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Notes on Quotes</title>
      </Head>
      <ArticleContainer>
        <Hero content="Lorem ipsum" />
      </ArticleContainer>
      <Container>
        <ArticlePreview slug="pete-adeney-quotes-henry-david-thoreau" />
        <ArticlePreview slug="pete-adeney-quotes-henry-david-thoreau" />
        <ArticlePreview slug="pete-adeney-quotes-henry-david-thoreau" />
      </Container>
    </>
  );
};

export default Home;
