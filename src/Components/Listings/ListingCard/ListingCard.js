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
          <ListingDetailText>inquilini</ListingDetailText>
        </ListingDetailContainer>
        <ListingDetailContainer>
          <ListingDetailNumber>{baths}</ListingDetailNumber>
          <ListingDetailText>bagno</ListingDetailText>
        </ListingDetailContainer>
        <ListingDetailContainer>
          <ListingDetailNumber>{beds}</ListingDetailNumber>
          <ListingDetailText>letto</ListingDetailText>
        </ListingDetailContainer>
      </ListingDetailsContainer>
    </Card>
  );
};

export default ListingCard;
