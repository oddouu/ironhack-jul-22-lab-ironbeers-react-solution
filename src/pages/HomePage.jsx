import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <p>
        <Link to='/beers'>All Beers</Link>
      </p>
      <p>
        <Link to='/random-beer'>Random Beer</Link>
      </p>
      <p>
        <Link to='/new-beer'>New Beer</Link>
      </p>
    </div>
  );
};

export default HomePage;
