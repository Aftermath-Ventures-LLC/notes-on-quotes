import { useQuery } from '@apollo/react-hooks';
import Error from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import React from 'react';
import Content from '../components/Content';
import Container from '../elements/Container';
import { FetchPage, FETCH_PAGE } from '../graphql/fetchPage';
import { withApollo } from '../lib/withApollo';

const GenericPage = () => {
  const {
    query: { slug },
  } = useRouter();

  const { data, loading } = useQuery<FetchPage>(FETCH_PAGE, {
    variables: {
      slug,
    },
  });

  if (loading) {
    return null;
  }

  const { page } = data;

  return page ? (
    <>
      <Head>
        <title>{page.pageTitle}</title>
        <meta name="description" content={page.metaDescription} />
      </Head>
      <Container>
        <Content content={RichText.asHtml(page.content)} />
      </Container>
    </>
  ) : (
    <Error statusCode={404} />
  );
};

export default withApollo(GenericPage);
