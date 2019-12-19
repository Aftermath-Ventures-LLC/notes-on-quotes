import React, { FC } from 'react';
import { Container } from './styles';

interface ContentProps {
  content: string;
}

const Content: FC<ContentProps> = ({ content }) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Content;
