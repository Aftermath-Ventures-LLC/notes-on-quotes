import React from 'react';
import Divider from '../../Divider';
import { Content, HeaderContainer, ProfileImage, Quote, Title } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <ProfileImage src="http://placehold.it/240x240" />
      <Content>
        <Title>Lorem ipsum dolar</Title>
        <Quote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          obcaecati neque quam molestiae nemo et velit voluptas ducimus eveniet
          labore quo nesciunt animi. Asperiores reiciendis magnam, sapiente non
          quidem at.
        </Quote>
      </Content>
      <Divider isHiddenDesktop />
    </HeaderContainer>
  );
};

export default Header;
