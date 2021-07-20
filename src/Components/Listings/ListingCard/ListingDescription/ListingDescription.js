import React from 'react';

import {
  ListingType,
  ListingTitle,
  ListingDetailsContainer,
  ListingDetailContainer,
  ListingDetailNumber,
  ListingDetailText,
  ListingDescriptionContainer,
  ListingDescriptionText,
} from './style';

const ListingDescription = ({
  type,
  title,
  tenants,
  baths,
  beds,
  description,
}) => {
  return (
    <ListingDetailsContainer>
      <ListingType>{type}</ListingType>
      <ListingTitle>{title}</ListingTitle>
      <ListingDetailContainer>
        <>
          <ListingDetailNumber>{tenants}</ListingDetailNumber>
          <ListingDetailText>
            {tenants === 1 ? 'inquilino' : 'inquilini'}
          </ListingDetailText>
        </>
        <>
          <ListingDetailNumber>{baths}</ListingDetailNumber>
          <ListingDetailText>
            {baths === 1 ? 'bagno' : 'bagni'}
          </ListingDetailText>
        </>
        <>
          <ListingDetailNumber>{beds}</ListingDetailNumber>
          <ListingDetailText>
            {beds === 1 ? 'letto' : 'letti'}
          </ListingDetailText>
        </>
      </ListingDetailContainer>
      <ListingDescriptionContainer>
        <ListingDescriptionText>{description}</ListingDescriptionText>
      </ListingDescriptionContainer>
    </ListingDetailsContainer>
  );
};

export default ListingDescription;
