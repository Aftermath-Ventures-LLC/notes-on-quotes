import React, { FC } from 'react';
import { HeroContainer } from './style';

interface HeroProps {
  content: string;
}

const Hero: FC<HeroProps> = ({ content }) => {
  return <HeroContainer dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Hero;
