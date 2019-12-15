import styled from '@emotion/styled';
import { color, fontSize, space, bp } from '../../../styles/theme';
import Container from '../../Container';

export const HeaderContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: space(4),

  [bp(0)]: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: space(4),
    borderBottom: 0,
  },
});

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',

  [bp(0)]: {
    paddingLeft: space(4),
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

  '&:before': {
    content: 'open-quote',
  },

  '&:after': {
    content: 'close-quote',
  },

  [bp(0)]: {
    textAlign: 'left',
  },
});