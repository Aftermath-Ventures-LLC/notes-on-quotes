import Link from 'next/link';
import React, { MouseEvent, useEffect, useState } from 'react';
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
  Overlay,
  WordMark,
} from './styles';

const GlobalHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overlayIsOpen');
    } else {
      document.body.classList.remove('overlayIsOpen');
    }

    return () => {
      document.body.classList.remove('overlayIsOpen');
    };
  }, [isOpen]);

  const handleMenuButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setIsOpen(!isOpen);
  };

  const handleContainerClick = () => {
    setIsOpen(false);
  };

  return (
    <Navigation onClick={handleContainerClick}>
      <NavContainer>
        <Link href="/" passHref>
          <WordMark>Notes on Quotes</WordMark>
        </Link>
        <Hamburger aria-label="Open the menu" onClick={handleMenuButtonClick}>
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
        </NavLinks>
      </NavContainer>
      {isOpen && <Overlay />}
    </Navigation>
  );
};

export default GlobalHeader;
