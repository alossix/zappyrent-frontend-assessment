import React from 'react';

import CloseButton from './close-button.png';

import {
  ModalBackdrop,
  Card,
  CloseButtonContainer,
  CloseButtonImage,
  ListingTitle,
  ImageContainer,
  AvailableButton,
  Address,
  DescriptionContainer,
  ListingDetailsContainer,
  ListingDetailContainer,
  ListingDetailNumber,
  ListingDetailText,
  ListingDescriptionContainer,
  ListingDescriptionText,
  HR,
  CanoneContainer,
  CanoneTitle,
  CanonePriceContainer,
  CanonePrice,
  CanoneMese,
  ReserveButton,
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
    <ModalBackdrop onClick={clickHandler}>
      <Card>
        <CloseButtonContainer>
          <CloseButtonImage src={CloseButton} />
        </CloseButtonContainer>
        <ListingTitle>{modalListing.title}</ListingTitle>
        <ImageContainer src={modalListing.images[0].url}>
          {modalListing.available && (
            <AvailableButton>Disponibile subito</AvailableButton>
          )}
        </ImageContainer>
        <DescriptionContainer>
          <ListingDetailsContainer>
            <ListingDetailContainer>
              <ListingDetailNumber>
                {modalListing.tenants}
              </ListingDetailNumber>
              <ListingDetailText>
                {modalListing.tenants === 1
                  ? 'inquilino'
                  : 'inquilini'}
              </ListingDetailText>
            </ListingDetailContainer>
            <ListingDetailContainer>
              <ListingDetailNumber>
                {modalListing.baths}
              </ListingDetailNumber>
              <ListingDetailText>
                {modalListing.baths === 1 ? 'bagno' : 'bagni'}
              </ListingDetailText>
            </ListingDetailContainer>
            <ListingDetailContainer>
              <ListingDetailNumber>
                {modalListing.beds}
              </ListingDetailNumber>
              <ListingDetailText>
                {modalListing.beds === 1 ? 'letto' : 'letti'}
              </ListingDetailText>
            </ListingDetailContainer>
          </ListingDetailsContainer>
          <Address>
            {modalListing.street}&nbsp;{modalListing.street_number},
            &nbsp;{modalListing.cap}&nbsp;{modalListing.city}
          </Address>
          <ListingDescriptionContainer>
            <ListingDescriptionText>
              {modalListing.description}
            </ListingDescriptionText>
          </ListingDescriptionContainer>
        </DescriptionContainer>
        <HR />
        <CanoneContainer>
          <CanonePriceContainer>
            <CanoneTitle>Canone d’affitto</CanoneTitle>
            <CanonePrice>
              €&nbsp;{modalListing.price}&nbsp;
            </CanonePrice>
            <CanoneMese>/mese</CanoneMese>
          </CanonePriceContainer>
          <ReserveButton>Prenota alloggio</ReserveButton>
        </CanoneContainer>
      </Card>
    </ModalBackdrop>
  );
};

export default ListingModal;
