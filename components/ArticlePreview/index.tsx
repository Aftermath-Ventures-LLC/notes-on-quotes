import React, { FC } from 'react';
import { Container, Content, ProfileImage, Quote, Title } from './styles';
import Link from 'next/link';

interface ArticlePreviewProps {
  profileImage: {
    alt: string;
    url: string;
  };
  quote: string;
  slug: string;
  title: string;
}

const ArticlePreview: FC<ArticlePreviewProps> = ({
  profileImage,
  quote,
  slug,
  title,
}) => {
  return (
    <Link href="/articles/[slug]" as={`/articles/${slug}`} passHref>
      <Container>
        {profileImage && (
          <ProfileImage alt={profileImage.alt} src={profileImage.url} />
        )}
        <Content>
          <Title>{title}</Title>
          <Quote dangerouslySetInnerHTML={{ __html: quote }} />
        </Content>
      </Container>
    </Link>
  );
};

export default ArticlePreview;
