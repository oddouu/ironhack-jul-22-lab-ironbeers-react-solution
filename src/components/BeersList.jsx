import React from 'react';
import { Link } from 'react-router-dom';

const BeersList = (props) => {
  const { beers } = props;
  return (
    <div>
      {beers.map((eachBeer) => {
        return (
          <div key={eachBeer._id}>
            <Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link>;
          </div>
        );
      })}
    </div>
  );
};

export default BeersList;
