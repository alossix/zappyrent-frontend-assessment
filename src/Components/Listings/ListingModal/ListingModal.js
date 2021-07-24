import React from 'react';

import CloseButton from './close-button.png';
import ModalDescription from './ModalDescription/ModalDescription';
import Canone from './Canone/Canone';

import {
  ModalBackdrop,
  Card,
  CloseButtonContainer,
  CloseButtonImage,
  ListingTitle,
  ImageContainer,
  AvailableButton,
} from './style';

const ListingModal = ({ modalListing, setModalIsOpen }) => {
  const { title, images, available, price } = modalListing;

  const modalCloseHandler = () => {
    document.body.style.overflow = 'scroll';
    setModalIsOpen(false);
  };

  return (
    <ModalBackdrop onClick={modalCloseHandler}>
      <Card>
        <CloseButtonContainer>
          <CloseButtonImage
            src={CloseButton}
            onClick={modalCloseHandler}
          />
        </CloseButtonContainer>
        <ListingTitle>{title}</ListingTitle>
        <ImageContainer src={images[0].url}>
          {available && (
            <AvailableButton>Disponibile subito</AvailableButton>
          )}
        </ImageContainer>
        <ModalDescription modalListing={modalListing} />
        <Canone price={price} modalCloseHandler={modalCloseHandler} />
      </Card>
    </ModalBackdrop>
  );
};

export default ListingModal;
