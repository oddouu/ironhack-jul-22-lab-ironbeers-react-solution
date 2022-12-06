import React from 'react';

const BeerContent = (props) => {
  const { name, image_url, tagline } = props.beer;
  console.log(name, image_url, tagline);
  return (
    <div>
      <h1>Single beer</h1>
      <h2>{name}</h2>
      <h3>{tagline}</h3>
      <img src={image_url} alt={name} />
    </div>
  );
};

export default BeerContent;
