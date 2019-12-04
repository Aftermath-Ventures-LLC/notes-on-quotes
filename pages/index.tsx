import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      Notes on Quotes
      <p>
        <Link href="/about">About</Link>
      </p>
    </div>
  );
};

export default Home;
