import React, { FC } from 'react';
import Divider from '../../Divider';
import { Content, HeaderContainer, ProfileImage, Quote, Title } from './styles';

interface HeaderProps {
  citation: string;
  profileImage: {
    url: string;
    alt: string;
  };
  quote: string;
  title: string;
}

const Header: FC<HeaderProps> = ({ title, profileImage, quote }) => {
  return (
    <HeaderContainer>
      <ProfileImage src={profileImage.url} />
      <Content>
        <Title>{title}</Title>
        <Quote dangerouslySetInnerHTML={{ __html: quote }} />
      </Content>
      <Divider isHiddenDesktop />
    </HeaderContainer>
  );
};

export default Header;
