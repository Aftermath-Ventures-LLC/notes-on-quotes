import React from 'react';
import Input from '../../elements/Input';
import { Container, Content, Heading, InputContainer } from './style';

const SubscribeCta = () => {
  return (
    <Container>
      <Heading>Get the Newest Notes on Quotes in Your Inbox!</Heading>
      <Content>
        Sign up now and join the hundreds of people who’ve subscribed to get my
        writing. You will also instantly receive a collection of my most popular
        articles and interviews.
      </Content>
      <InputContainer>
        <Input placeholder="Email address" />
        <button type="submit">Subscribe</button>
      </InputContainer>
    </Container>
  );
};

export default SubscribeCta;
