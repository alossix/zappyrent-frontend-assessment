import React from 'react';

import {
  ModalContainer,
  Address,
  ListingDetailContainer,
  DetailNumber,
  DetailText,
  DescriptionText,
} from './style';

const DescriptionContainer = ({ modalListing }) => {
  const {
    tenants,
    baths,
    beds,
    street,
    street_number,
    cap,
    city,
    description,
  } = modalListing;

  return (
    <ModalContainer>
      <ListingDetailContainer>
        <DetailNumber>{tenants}</DetailNumber>
        <DetailText>
          {tenants === 1 ? 'inquilino' : 'inquilini'}
        </DetailText>
        <DetailNumber>{baths}</DetailNumber>
        <DetailText>{baths === 1 ? 'bagno' : 'bagni'}</DetailText>
        <DetailNumber>{beds}</DetailNumber>
        <DetailText>{beds === 1 ? 'letto' : 'letti'}</DetailText>
      </ListingDetailContainer>
      <Address>
        {street}&nbsp;{street_number},&nbsp;{cap}&nbsp;{city}
      </Address>
      <DescriptionText>{description}</DescriptionText>
    </ModalContainer>
  );
};

export default DescriptionContainer;
