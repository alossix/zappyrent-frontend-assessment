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
  return (
    <ModalContainer>
      <ListingDetailsContainer>
        <ListingDetailContainer>
          <ListingDetailNumber>
            {modalListing.tenants}
          </ListingDetailNumber>
          <ListingDetailText>
            {modalListing.tenants === 1 ? 'inquilino' : 'inquilini'}
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
    </ModalContainer>
  );
};

export default DescriptionContainer;
