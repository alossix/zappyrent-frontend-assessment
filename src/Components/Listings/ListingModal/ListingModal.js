import React from 'react';

import ListingDescription from '../ListingCard/ListingDescription/ListingDescription';

import {
  ModalBackdrop,
  Card,
  ImageContainer,
  AvailableButton,
  CanoneContainer,
  CanoneTitle,
  CanonePriceContainer,
  CanonePrice,
  CanoneMese,
} from './style';

const ListingModal = ({
  modalListing,
  modalIsOpen,
  setModalIsOpen,
}) => {
  const clickHandler = () => {
    document.body.style.overflow = 'scroll';
    setModalIsOpen(false);
  };

  return (
    <>
      <ModalBackdrop onClick={clickHandler} />
      <Card>
        <ImageContainer src={modalListing.image}>
          {modalListing.available && (
            <AvailableButton>Disponibile subito</AvailableButton>
          )}
        </ImageContainer>
        <ListingDescription
          type={modalListing.type}
          title={modalListing.title}
          tenants={modalListing.tenants}
          baths={modalListing.baths}
          beds={modalListing.beds}
          description={modalListing.description}
        />
        <CanoneContainer>
          <CanoneTitle>Canone d’affitto</CanoneTitle>
          <CanonePriceContainer>
            <CanonePrice>
              €&nbsp;{modalListing.price}&nbsp;
            </CanonePrice>
            <CanoneMese>/mese</CanoneMese>
          </CanonePriceContainer>
        </CanoneContainer>
      </Card>
    </>
  );
};

export default ListingModal;
