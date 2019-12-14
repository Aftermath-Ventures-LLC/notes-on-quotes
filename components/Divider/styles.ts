import styled from '@emotion/styled';
import { color, space, bp } from '../../styles/theme';

export const Bar = styled.hr<{
  isHiddenDesktop: boolean;
  isHiddenMobile: boolean;
}>(({ isHiddenDesktop, isHiddenMobile }) => ({
  display: isHiddenMobile ? 'none' : 'block',
  width: '100%',
  height: 2,
  marginTop: space(4),
  marginBottom: space(4),
  backgroundColor: color('primary'),
  border: 0,

  [bp(0)]: {
    display: isHiddenDesktop ? 'none' : 'block',
  },
}));
