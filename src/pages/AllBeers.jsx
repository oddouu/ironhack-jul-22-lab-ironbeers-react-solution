import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { allBeers } from '../services/beers';
import BeersList from '../components/BeersList';

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    allBeers().then((data) => setBeers(data));
  });
  return (
    <div>
      <Header />

      <BeersList beers={beers} />
    </div>
  );
};

export default AllBeers;
