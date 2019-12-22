import styled from '@emotion/styled';
import { bp, size, space } from '../../styles/theme';

const Container = styled.div({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: size('contentContainer'),
  paddingLeft: space(3),
  paddingRight: space(3),

  [bp(0)]: {
    paddingRight: space(5),
    paddingLeft: space(5),
  },
});

export default Container;
