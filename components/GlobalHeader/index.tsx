import Link from 'next/link';
import React, { useState } from 'react';
import ActiveLink from '../ActiveLink';
import {
  Hamburger,
  HamburgerBar,
  HamburgerBars,
  NavContainer,
  Navigation,
  NavLabel,
  NavLink,
  NavLinks,
  WordMark,
} from './styles';

const GlobalHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navigation>
      <NavContainer>
        <Link href="/" passHref>
          <WordMark>Notes on Quotes</WordMark>
        </Link>
        <Hamburger onClick={handleMenuButtonClick}>
          <HamburgerBars>
            {[1, 2, 3, 4].map(index => (
              <HamburgerBar isOpen={isOpen} key={index} />
            ))}
          </HamburgerBars>
        </Hamburger>
        <NavLinks isOpen={isOpen}>
          <NavLink>
            <ActiveLink href="/about" passHref>
              <NavLabel>About</NavLabel>
            </ActiveLink>
          </NavLink>
          <NavLink>
            <ActiveLink href="/search" passHref>
              <NavLabel>Search</NavLabel>
            </ActiveLink>
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Navigation>
  );
};

export default GlobalHeader;
