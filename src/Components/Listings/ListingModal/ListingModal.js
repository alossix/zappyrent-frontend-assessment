import React, { useContext } from 'react';

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
import ModalContext from '../../../store/modal-context';

const ListingModal = () => {
  const modalCtx = useContext(ModalContext);
  const { title, images, available, price } = modalCtx.modalListing;

  return (
    <ModalBackdrop onClick={modalCtx.modalCloseHandler}>
      <Card>
        <CloseButtonContainer>
          <CloseButtonImage
            src={CloseButton}
            onClick={modalCtx.modalCloseHandler}
          />
        </CloseButtonContainer>
        <ListingTitle>{title}</ListingTitle>
        <ImageContainer src={images[0].url}>
          {available && (
            <AvailableButton>Disponibile subito</AvailableButton>
          )}
        </ImageContainer>
        <ModalDescription />
        <Canone price={price} />
      </Card>
    </ModalBackdrop>
  );
};

export default ListingModal;
