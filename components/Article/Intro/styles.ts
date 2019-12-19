import styled from '@emotion/styled';
import { bp, color, fontSize, space } from '../../../styles/theme';

export const Header = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: space(3),
  fontSize: fontSize(1),
  fontStyle: 'italic',

  [bp(0)]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const SocialShareIcons = styled.div({
  marginBottom: space(3),

  svg: {
    width: 20,
    height: 20,
    marginLeft: space(3),

    '&:hover': {
      fill: color('accent'),
    },
  },

  [bp(0)]: {
    order: 2,
    marginBottom: 0,
  },
});

export const Content = styled.div({
  lineHeight: 1.4,
  fontSize: fontSize(1),
  fontStyle: 'italic',
});
