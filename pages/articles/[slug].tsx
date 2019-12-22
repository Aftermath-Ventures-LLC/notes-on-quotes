import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import React from 'react';
import ArticleHeader from '../../components/ArticleHeader';
import ArticleIntro from '../../components/ArticleIntro';
import Content from '../../components/Content';
import SubscribeCta from '../../components/SubscribeCta';
import ArticleContainer from '../../elements/ArticleContainer';
import { FetchArticle, FETCH_ARTICLE } from '../../graphql/fetchArticle';
import { withApollo } from '../../lib/withApollo';

const ArticlePage = () => {
  const {
    query: { slug },
  } = useRouter();

  const { data, loading } = useQuery<FetchArticle>(FETCH_ARTICLE, {
    variables: { slug },
  });

  if (loading) {
    return null;
  }

  const { article } = data;

  const title = RichText.asText(article.title);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ArticleHeader
        citation={article.citation}
        profileImage={article.profileImage}
        quote={RichText.asHtml(article.quote)}
        title={title}
      />
      <ArticleContainer>
        <ArticleIntro
          intro={RichText.asHtml(article.intro)}
          publishedAt={article._meta.publishedAt}
        />
        <SubscribeCta />
        <Content content={RichText.asHtml(article.content)} />
      </ArticleContainer>
    </>
  );
};

export default withApollo(ArticlePage);
