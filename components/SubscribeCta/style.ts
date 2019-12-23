import styled from '@emotion/styled';
import { color, fontSize, space, font } from '../../styles/theme';

export const Container = styled.form({
  marginTop: space(4),
  marginBottom: space(4),
  padding: space(4),
  backgroundColor: color('backgroundAlt'),
  textAlign: 'center',
});

export const Heading = styled.h3({
  marginTop: 0,
  fontSize: fontSize(2),
});

export const Content = styled.div({
  fontSize: fontSize(1),
  fontStjyle: 'italic',
});

export const InputContainer = styled.div({
  position: 'relative',
  maxWidth: 360,
  margin: '0 auto',
  marginTop: space(4),

  '&:before': {
    content: '""',
    position: 'absolute',
    top: 4,
    left: -4,
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: color('accent'),
    opacity: 0.5,
  },

  input: {
    position: 'relative',
    width: '100%',
  },

  button: {
    position: 'absolute',
    right: 0,
    height: '100%',
    paddingLeft: space(2),
    paddingRight: space(2),
    fontFamily: font('sansSerif'),
    fontSize: fontSize(1),
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    border: 0,
  },
});
