import React, { FC } from 'react';
import { Container, Content, ProfileImage, Quote, Title } from './styles';
import Link from 'next/link';

interface ArticlePreviewProps {
  slug: string;
}

const ArticlePreview: FC<ArticlePreviewProps> = ({ slug }) => {
  return (
    <Link href="/articles/[slug]" as={`/articles/${slug}`} passHref>
      <Container>
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
    </Link>
  );
};

export default ArticlePreview;
