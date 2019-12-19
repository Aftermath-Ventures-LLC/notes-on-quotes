import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import React from 'react';
import Article from '../../components/Article';
import { withApollo } from '../../lib/withApollo';

interface Article {
  article: {
    citation: string;
    content: object;
    intro: object;
    profileImage: {
      alt: string;
      copyright: string | null;
      dimensions: {
        width: number;
        height: number;
      };
      url: string;
    };
    quote: object;
    title: object;
    _meta: {
      publishedAt: string;
    };
  };
}

const FETCH_ARTICLE = gql`
  query fetchArticle($slug: String!) {
    article(uid: $slug, lang: "en-us") {
      citation
      content
      intro
      profileImage: profile_image
      quote
      title
      _meta {
        publishedAt: firstPublicationDate
      }
    }
  }
`;

const ArticlePage = () => {
  const {
    query: { slug },
  } = useRouter();

  const { data, loading } = useQuery<Article>(FETCH_ARTICLE, {
    variables: { slug },
  });

  if (loading) {
    return null;
  }

  const title = RichText.asText(data.article.title);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Article
        citation={data.article.citation}
        content={RichText.asHtml(data.article.content)}
        intro={RichText.asHtml(data.article.intro)}
        profileImage={data.article.profileImage}
        publishedAt={data.article._meta.publishedAt}
        quote={RichText.asHtml(data.article.quote)}
        title={title}
      />
    </>
  );
};

export default withApollo(ArticlePage);
