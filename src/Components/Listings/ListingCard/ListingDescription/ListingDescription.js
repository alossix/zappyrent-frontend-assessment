import React from 'react';

import {
  ListingType,
  ListingTitle,
  ListingDetailsContainer,
  ListingDetailContainer,
  DetailNumber,
  DetailText,
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
        <DetailNumber>{tenants}</DetailNumber>
        <DetailText>
          {tenants === 1 ? 'inquilino' : 'inquilini'}
        </DetailText>
        <DetailNumber>{baths}</DetailNumber>
        <DetailText>{baths === 1 ? 'bagno' : 'bagni'}</DetailText>
        <DetailNumber>{beds}</DetailNumber>
        <DetailText>{beds === 1 ? 'letto' : 'letti'}</DetailText>
      </ListingDetailContainer>
      <ListingDescriptionContainer>
        <ListingDescriptionText>{description}</ListingDescriptionText>
      </ListingDescriptionContainer>
    </ListingDetailsContainer>
  );
};

export default ListingDescription;
