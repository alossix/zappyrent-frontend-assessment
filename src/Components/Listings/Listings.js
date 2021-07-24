import React from 'react';

import ListingCard from './ListingCard/ListingCard';
import ListingModal from './ListingModal/ListingModal';

import {
  ListingsContainer,
  ListingsNumber,
  ResultsContainer,
} from './style';

const Listings = ({
  listings,
  modalOpenHandler,
  modalListing,
  modalIsOpen,
  setModalIsOpen,
}) => {
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
            modalOpenHandler={modalOpenHandler}
            key={listing.id}
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
