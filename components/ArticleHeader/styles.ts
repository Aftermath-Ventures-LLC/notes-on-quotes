import styled from '@emotion/styled';
import Container from '../../elements/Container';
import { bp, color, fontSize, space } from '../../styles/theme';

export const HeaderContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: space(5),

  [bp(0)]: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: space(5),
    borderBottom: 0,
  },
});

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',

  [bp(0)]: {
    paddingLeft: space(5),
    paddingBottom: space(3),
  },
});

export const ProfileImage = styled.img({
  flexShrink: 0,
  width: 160,
  height: 160,
  border: `3px solid ${color('primary')}`,
  borderRadius: '50%',

  [bp(0)]: {
    width: 240,
    height: 240,
  },
});

export const Title = styled.h1({
  fontSize: fontSize(4),
  lineHeight: 1.1,
  textAlign: 'center',

  [bp(0)]: {
    fontSize: fontSize(5),
    textAlign: 'left',
  },
});

export const Quote = styled.blockquote({
  margin: 0,
  textAlign: 'center',
  fontStyle: 'italic',

  'p:first-of-type': {
    marginTop: 0,
  },

  'p:last-of-type': {
    marginBottom: 0,
  },

  [bp(0)]: {
    textAlign: 'left',
  },
});
