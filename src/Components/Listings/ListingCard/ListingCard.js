import React from 'react';

import {
  Card,
  ImageContainer,
  ListingType,
  ListingTitle,
  ListingDetailsContainer,
  ListingDetailContainer,
  ListingDetailNumber,
  ListingDetailText,
  ListingDescriptionContainer,
  ListingDescription,
  HR,
  CanoneTitle,
} from './style';

const ListingCard = ({
  image,
  type,
  title,
  tenants,
  baths,
  beds,
  description,
}) => {
  return (
    <Card>
      <ImageContainer src={image} />
      <ListingDetailsContainer>
        <ListingType>{type}</ListingType>
        <ListingTitle>{title}</ListingTitle>
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
      <ListingDescriptionContainer>
        <ListingDescription>{description}</ListingDescription>
      </ListingDescriptionContainer>
      <HR />
      <CanoneTitle>Canone d'affitto</CanoneTitle>
    </Card>
  );
};

export default ListingCard;
