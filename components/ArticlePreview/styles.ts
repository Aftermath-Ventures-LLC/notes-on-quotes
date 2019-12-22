import styled from '@emotion/styled';
import { bp, color, fontSize, space } from '../../styles/theme';

export const Container = styled.a({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: color('background'),
  padding: space(3),
  marginBottom: space(4),
  border: `2px solid ${color('primary')}`,
  color: color('text'),
  textDecoration: 'none',

  [bp(0)]: {
    flexDirection: 'row',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    top: 8,
    left: -8,
    width: '100%',
    height: '100%',
    backgroundColor: color('accent'),
    opacity: 0.5,
  },
});

export const ProfileImage = styled.img({
  flexShrink: 0,
  width: 100,
  height: 100,
  marginBottom: space(3),
  border: `3px solid ${color('primary')}`,
  borderRadius: '50%',

  [bp(0)]: {
    width: 160,
    height: 160,
    marginBottom: 0,
  },
});

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',

  [bp(0)]: {
    marginLeft: space(4),
  },
});

export const Title = styled.h2({
  marginTop: 0,
  marginBottom: 0,
  fontSize: fontSize(2),
  textAlign: 'center',

  [bp(0)]: {
    fontSize: fontSize(3),
    letterSpacing: -0.5,
    textAlign: 'left',
  },
});

export const Quote = styled.div({
  fontSize: fontSize(1),
  fontStyle: 'italic',
  textAlign: 'center',

  [bp(0)]: {
    fontSize: fontSize(2),
    textAlign: 'left',
  },
});
