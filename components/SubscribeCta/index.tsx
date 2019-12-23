import React from 'react';
import Input from '../../elements/Input';
import { Container, Content, Heading, InputContainer } from './style';

const SubscribeCta = () => {
  return (
    <Container
      action="https://stephenharrison.us17.list-manage.com/subscribe/post"
      method="POST"
      target="_blank"
    >
      <input type="hidden" name="u" value="608f4248b923c318984590c4d" />
      <input type="hidden" name="id" value="c4411dc773" />
      <input type="hidden" name="mc_signupsource" value="website" />
      <Heading>Get the Newest Notes on Quotes in Your Inbox!</Heading>
      <Content>
        Sign up now and join the hundreds of people who’ve subscribed to get my
        writing. You will also instantly receive a collection of my most popular
        articles and interviews.
      </Content>
      <InputContainer>
        <Input
          aria-label="Email address"
          name="MERGE0"
          placeholder="Email address"
          type="email"
        />
        <button type="submit">Subscribe</button>
      </InputContainer>
    </Container>
  );
};

export default SubscribeCta;
