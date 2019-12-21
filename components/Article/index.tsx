import React, { FC } from 'react';
import Content from '../Content';
import Header from './Header';
import Intro from './Intro';
import { ArticleContainer } from './styles';

interface ArticleProps {
  citation: string;
  content: string;
  intro: string;
  profileImage: {
    url: string;
    alt: string;
  };
  publishedAt: string;
  quote: string;
  title: string;
}

const Article: FC<ArticleProps> = ({
  citation,
  content,
  intro,
  profileImage,
  publishedAt,
  quote,
  title,
}) => {
  return (
    <>
      <Header
        citation={citation}
        profileImage={profileImage}
        quote={quote}
        title={title}
      />
      <ArticleContainer>
        <Intro intro={intro} publishedAt={publishedAt} />
        <Content content={content} />
      </ArticleContainer>
    </>
  );
};

export default Article;
