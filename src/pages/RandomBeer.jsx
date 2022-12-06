import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { randomBeer } from '../services/beers';
import BeerContent from '../components/BeerContent';

const RandomBeer = () => {
  const [beer, setBeer] = useState({});
  useEffect(() => {
    randomBeer().then((data) => setBeer(data));
  }, []);
  return (
    <div>
      <Header />
      <BeerContent beer={beer} />
    </div>
  );
};

export default RandomBeer;
