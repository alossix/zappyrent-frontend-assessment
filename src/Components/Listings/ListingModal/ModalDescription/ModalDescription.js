import React from 'react';

import {
  ModalContainer,
  Address,
  ListingDetailsContainer,
  ListingDetailContainer,
  ListingDetailNumber,
  ListingDetailText,
  ListingDescriptionContainer,
  ListingDescriptionText,
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
      <ListingDetailsContainer>
        <ListingDetailContainer>
          <ListingDetailNumber>{tenants}</ListingDetailNumber>
          <ListingDetailText>
            {tenants === 1 ? 'inquilino' : 'inquilini'}
          </ListingDetailText>
        </ListingDetailContainer>
        <ListingDetailContainer>
          <ListingDetailNumber>{baths}</ListingDetailNumber>
          <ListingDetailText>
            {baths === 1 ? 'bagno' : 'bagni'}
          </ListingDetailText>
        </ListingDetailContainer>
        <ListingDetailContainer>
          <ListingDetailNumber>{beds}</ListingDetailNumber>
          <ListingDetailText>
            {beds === 1 ? 'letto' : 'letti'}
          </ListingDetailText>
        </ListingDetailContainer>
      </ListingDetailsContainer>
      <Address>
        {street}&nbsp;{street_number}, &nbsp;{cap}&nbsp;{city}
      </Address>
      <ListingDescriptionContainer>
        <ListingDescriptionText>{description}</ListingDescriptionText>
      </ListingDescriptionContainer>
    </ModalContainer>
  );
};

export default DescriptionContainer;
