import React, { FC } from 'react';
import Divider from '../Divider';
import { Container } from './styles';

interface AudioEmbedProps {
  embedHtml: string;
}

const AudioEmbed: FC<AudioEmbedProps> = ({ embedHtml }) => {
  return (
    <Container id="audio-version">
      <Divider />
      <p>Audio version available here</p>
      <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
    </Container>
  );
};

export default AudioEmbed;
