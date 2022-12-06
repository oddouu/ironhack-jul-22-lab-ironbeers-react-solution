import React from 'react';
import { useState, useEffect } from 'react';
import BeerContent from '../components/BeerContent';
import { singleBeer } from '../services/beers';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const SingleBeer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    singleBeer(id).then((data) => setBeer(data));
  }, [id]);
  return (
    <div>
      <Header />
      <BeerContent beer={beer} />
    </div>
  );
};

export default SingleBeer;
