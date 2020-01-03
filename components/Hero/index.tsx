import React, { FC } from 'react';
import { HeroContainer, Content, Logo } from './style';

interface HeroProps {
  content: string;
  logo: {
    alt: string;
    copyright: string | null;
    dimensions: {
      width: number;
      height: number;
    };
    url: string;
  };
}

const Hero: FC<HeroProps> = ({ content, logo }) => {
  return (
    <HeroContainer>
      {logo && <Logo alt={logo.alt} src={logo.url} />}
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </HeroContainer>
  );
};

export default Hero;
