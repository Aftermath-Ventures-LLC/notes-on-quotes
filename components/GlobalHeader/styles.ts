import styled from '@emotion/styled';
import Container from '../../elements/Container';
import { bp, color, fontSize, space } from '../../styles/theme';

export const Navigation = styled.div({
  position: 'relative',
  zIndex: 100,
  boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.16)',
});

export const NavContainer = styled(Container)({
  flexDirection: 'row',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
});

export const WordMark = styled.a({
  color: color('text'),
  display: 'inline-block',
  fontSize: fontSize(3),
  fontWeight: 'bold',
  letterSpacing: -1,
  paddingBottom: space(2),
  paddingTop: space(2),
  textDecoration: 'none',

  [bp(0)]: {
    fontSize: fontSize(4),
  },
});

export const Hamburger = styled.button({
  backgroundColor: 'transparent',
  border: 'none',
  height: 32,
  outline: 0,
  width: 32,

  [bp(0)]: {
    display: 'none',
  },
});

export const HamburgerBars = styled.div({
  position: 'relative',
  width: 18,
  height: 13,
});

export const HamburgerBar = styled.span<{ isOpen: boolean }>(({ isOpen }) => ({
  display: 'inline-block',
  backgroundColor: color('text'),
  position: 'absolute',
  left: 0,
  width: '100%',
  height: 2,
  top: isOpen ? 6 : 0,
  transition: '.25s ease-in-out',

  '&:nth-of-type(1), &:nth-of-type(4)': {
    left: isOpen ? '50%' : undefined,
    width: isOpen ? 0 : undefined,
  },

  '&:nth-of-type(2), &:nth-of-type(3)': {
    top: 6,
    transform: isOpen ? 'rotate(45deg)' : undefined,
  },

  '&:nth-of-type(3)': {
    transform: isOpen ? 'rotate(-45deg)' : undefined,
  },

  '&:nth-of-type(4)': {
    top: isOpen ? 6 : 12,
  },
}));

export const NavLinks = styled.ul<{ isOpen: boolean }>(({ isOpen }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  display: isOpen ? 'block' : 'none',
  width: '100%',
  listStyle: 'none',
  margin: 0,
  padding: 0,

  [bp(0)]: {
    position: 'static',
    display: 'block',
    width: 'auto',
  },
}));

export const NavLink = styled.li({
  display: 'block',
  backgroundColor: color('background'),

  [bp(0)]: {
    display: 'inline-block',
    marginLeft: space(2),
  },
});

export const NavLabel = styled.a<{ isActive?: boolean }>(({ isActive }) => ({
  display: 'block',
  color: isActive ? color('text') : color('textAlt'),
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: fontSize(4),
  padding: space(3),
  borderTop: `1px solid ${color('backgroundAlt')}`,
  borderBottom: `1px solid ${color('backgroundAlt')}`,

  [bp(0)]: {
    display: 'inline-block',
    padding: space(1),
    fontSize: fontSize('2.5'),
    borderBottom: 'none',
  },
}));
