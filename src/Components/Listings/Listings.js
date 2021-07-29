import React, { useContext } from 'react';

import ModalContext from '../../store/modal-context';
import ListingContext from '../../store/listing-context';
import ListingCard from './ListingCard/ListingCard';
import ListingModal from './ListingModal/ListingModal';

import {
  ListingsContainer,
  ListingsNumber,
  ResultsContainer,
} from './style';

const Listings = () => {
  const modalCtx = useContext(ModalContext);
  const listingCtx = useContext(ListingContext);
  const { modalIsOpen } = modalCtx;
  const { listings } = listingCtx;

  return (
    <ListingsContainer>
      <ListingsNumber>
        {listings.length === 1
          ? `1 alloggio trovato`
          : `${listings.length} alloggi trovati`}
      </ListingsNumber>
      <ResultsContainer>
        {listings.map((listing) => (
          <ListingCard listing={listing} key={listing.id} />
        ))}
      </ResultsContainer>
      {modalIsOpen && <ListingModal />}
    </ListingsContainer>
  );
};

export default Listings;
