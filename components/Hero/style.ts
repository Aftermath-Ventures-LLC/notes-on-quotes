import styled from '@emotion/styled';
import Container from '../../elements/Container';
import { space, fontSize } from '../../styles/theme';

export const HeroContainer = styled(Container)({
  alignItems: 'center',
  marginTop: space(5),
  marginBottom: space(5),
  textAlign: 'center',
});

export const Logo = styled.img({
  width: 450,
  maxWidth: '80%',
  marginTop: space(3),
  marginBottom: space(3),
});

export const Content = styled.div({
  h1: {
    fontSize: fontSize(4),
  },

  h2: {
    fontSize: fontSize(3),
  },

  p: {
    lineHeight: 1.4,
  },

  img: {
    maxWidth: '100%',
  },
});
