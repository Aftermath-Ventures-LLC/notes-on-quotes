import React from 'react';
import { FooterContainer, LeftContent, RightContent } from './styles';
import Link from 'next/link';

const GlobalFooter = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <LeftContent>
        Aftermath Ventures, LLC/Stephen Harrison &copy; {year}. All Rights
        Reserved.
      </LeftContent>
      <RightContent>
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
      </RightContent>
    </FooterContainer>
  );
};

export default GlobalFooter;
