import styled from '@emotion/styled';
import Container from '../../elements/Container';
import { space, fontSize } from '../../styles/theme';

export const HeroContainer = styled(Container)({
  marginTop: space(5),
  marginBottom: space(5),
  textAlign: 'center',

  h1: {
    fontSize: fontSize(4),
  },

  h2: {
    fontSize: fontSize(3),
  },

  p: {
    lineHeight: 1.4,
  },
});
