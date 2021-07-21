import React from 'react';

import ListingCard from './ListingCard/ListingCard';

import {
  ListingsContainer,
  ListingsNumber,
  ResultsContainer,
} from './style';

const Listings = ({ listings }) => {
  return (
    <ListingsContainer>
      <ListingsNumber>
        {listings.length === 1
          ? '1 alloggio trovato'
          : `${listings.length} alloggi trovati`}
      </ListingsNumber>
      <ResultsContainer>
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            image={listing.images[0].url}
            type={listing.type}
            title={listing.title}
            tenants={listing.tenants}
            baths={listing.baths}
            beds={listing.beds}
            description={listing.description}
            price={listing.price}
            available={listing.available}
          />
        ))}
      </ResultsContainer>
    </ListingsContainer>
  );
};

export default Listings;
