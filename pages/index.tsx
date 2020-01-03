import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import React from 'react';
import ArticlePreview from '../components/ArticlePreview';
import Hero from '../components/Hero';
import ArticleContainer from '../elements/ArticleContainer';
import Container from '../elements/Container';
import { FetchHomePage, FETCH_HOME_PAGE } from '../graphql/fetchHomePage';
import { withApollo } from '../lib/withApollo';

const Home = () => {
  const { data, loading } = useQuery<FetchHomePage>(FETCH_HOME_PAGE);

  if (loading) {
    return null;
  }

  const homePage = data.homePage.edges[0].node;
  const articles = data.articles.edges;

  return (
    <>
      <Head>
        <title>Notes on Quotes</title>
        <meta name="description" content={homePage.metaDescription} />
      </Head>
      <ArticleContainer>
        <Hero content={RichText.asHtml(homePage.hero)} logo={homePage.logo} />
      </ArticleContainer>
      <Container>
        <h3>Recent interviews</h3>
        {articles.map(({ node: article }) => (
          <ArticlePreview
            key={article.meta.uid}
            profileImage={article.profileImage}
            quote={RichText.asHtml(article.quote)}
            slug={article.meta.uid}
            title={RichText.asText(article.title)}
          />
        ))}
      </Container>
    </>
  );
};

export default withApollo(Home);
