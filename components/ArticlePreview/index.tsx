import React, { FC } from 'react';
import { Container, ProfileImage, Title, Quote, Content } from './styles';

interface ArticlePreviewProps {
  href: string;
}

const ArticlePreview: FC<ArticlePreviewProps> = ({ href }) => {
  return (
    <Container href={`/articles/${href}`}>
      <ProfileImage src="//placehold.it/160x160" />
      <Content>
        <Title>
          Pete Adeney aka Mr. Money Mustache Quotes Henry David Thoreau
        </Title>
        <Quote>
          “A man is rich in proportion to the number of things which he can
          afford to let alone.”
        </Quote>
      </Content>
    </Container>
  );
};

export default ArticlePreview;
