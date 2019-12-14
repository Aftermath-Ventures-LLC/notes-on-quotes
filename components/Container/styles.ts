import styled from '@emotion/styled';
import { bp, size, space } from '../../styles/theme';

export const Content = styled.div({
  margin: '0 auto',
  maxWidth: size('contentContainer'),
  paddingLeft: space(3),
  paddingRight: space(3),

  [bp(0)]: {
    paddingRight: space(4),
    paddingLeft: space(4),
  },
});
