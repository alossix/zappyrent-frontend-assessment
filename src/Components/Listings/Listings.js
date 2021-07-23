import React, { useState } from 'react';

import ListingCard from './ListingCard/ListingCard';
import ListingModal from './ListingModal/ListingModal';

import {
  ListingsContainer,
  ListingsNumber,
  ResultsContainer,
} from './style';

const Listings = ({ listings }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalListing, setModalListing] = useState();

  const modalHandler = (e, listing) => {
    document.body.style.overflow = 'hidden';
    setModalListing(listing);
    setModalIsOpen(true);
  };

  return (
    <ListingsContainer>
      <ListingsNumber>
        {listings.length === 1
          ? `1 alloggio trovato`
          : `${listings.length} alloggi trovati`}
      </ListingsNumber>
      <ResultsContainer>
        {listings.map((listing) => (
          <ListingCard
            listing={listing}
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
            modalHandler={modalHandler}
          />
        ))}
      </ResultsContainer>
      {modalIsOpen && (
        <ListingModal
          modalListing={modalListing}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </ListingsContainer>
  );
};

export default Listings;
