import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import React, { FC } from 'react';
import Container from '../../elements/Container';
import { FetchPage, FETCH_PAGE } from '../../graphql/fetchPage';
import Content from '../Content';

interface GenericPageProps {
  slug: string;
}

const GenericPage: FC<GenericPageProps> = ({ slug }) => {
  const { data, loading } = useQuery<FetchPage>(FETCH_PAGE, {
    variables: {
      slug,
    },
  });

  if (loading) {
    return null;
  }

  const { page } = data;

  return (
    <>
      <Head>
        <title>{page.pageTitle}</title>
        <meta name="description" content={page.metaDescription} />
      </Head>
      <Container>
        <Content content={RichText.asHtml(page.content)} />
      </Container>
    </>
  );
};

export default GenericPage;
