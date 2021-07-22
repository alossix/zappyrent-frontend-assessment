import React from 'react';

import CloseButton from './close-button.png';
import DescriptionContainer from './DescriptionContainer/DescriptionContainer';

import {
  ModalBackdrop,
  Card,
  CloseButtonContainer,
  CloseButtonImage,
  ListingTitle,
  ImageContainer,
  AvailableButton,
  HR,
  CanoneContainer,
  CanoneTitle,
  CanonePriceContainer,
  CanonePrice,
  CanoneMese,
  ReserveButton,
} from './style';

const ListingModal = ({ modalListing, setModalIsOpen }) => {
  const clickHandler = () => {
    document.body.style.overflow = 'scroll';
    setModalIsOpen(false);
  };

  return (
    <ModalBackdrop onClick={clickHandler}>
      <Card>
        <CloseButtonContainer>
          <CloseButtonImage
            src={CloseButton}
            onClick={clickHandler}
          />
        </CloseButtonContainer>
        <ListingTitle>{modalListing.title}</ListingTitle>
        <ImageContainer src={modalListing.images[0].url}>
          {modalListing.available && (
            <AvailableButton>Disponibile subito</AvailableButton>
          )}
        </ImageContainer>
        <DescriptionContainer modalListing={modalListing} />
        <HR />
        <CanoneContainer>
          <CanonePriceContainer>
            <CanoneTitle>Canone d’affitto</CanoneTitle>
            <CanonePrice>
              €&nbsp;{modalListing.price}&nbsp;
            </CanonePrice>
            <CanoneMese>/mese</CanoneMese>
          </CanonePriceContainer>
          <ReserveButton onClick={clickHandler}>
            Prenota alloggio
          </ReserveButton>
        </CanoneContainer>
      </Card>
    </ModalBackdrop>
  );
};

export default ListingModal;
