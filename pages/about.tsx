import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import React from 'react';
import Content from '../components/Content';
import Container from '../elements/Container';
import { FetchAbout, FETCH_ABOUT } from '../graphql/fetchAbout';
import { withApollo } from '../lib/withApollo';

const AboutPage = () => {
  const { data, loading } = useQuery<FetchAbout>(FETCH_ABOUT);

  if (loading) {
    return null;
  }

  const aboutPage = data.allAbouts.edges[0].node;

  return (
    <>
      <Head>
        <title>{aboutPage.pageTitle}</title>
        <meta name="description" content={aboutPage.metaDescription} />
      </Head>
      <Container>
        <Content content={RichText.asHtml(aboutPage.content)} />
      </Container>
    </>
  );
};

export default withApollo(AboutPage);
