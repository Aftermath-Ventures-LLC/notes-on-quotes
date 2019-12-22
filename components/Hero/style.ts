import styled from '@emotion/styled';
import Container from '../../elements/Container';
import { space, fontSize } from '../../styles/theme';

export const HeroContainer = styled(Container)({
  marginTop: space(5),
  marginBottom: space(6),
  textAlign: 'center',

  h1: {
    fontSize: fontSize(4),
  },

  h2: {
    fontSize: fontSize(3),
  },
});
