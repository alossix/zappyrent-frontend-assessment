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
} from './style';

const ListingCard = ({
  image,
  type,
  title,
  tenants,
  baths,
  beds,
}) => {
  return (
    <Card>
      <ImageContainer src={image} />
      <ListingType>{type}</ListingType>
      <ListingTitle>{title}</ListingTitle>
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
    </Card>
  );
};

export default ListingCard;
