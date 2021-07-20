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
  CanoneContainer,
  CanoneTitle,
  CanonePriceContainer,
  CanonePrice,
  CanoneMese,
} from './style';

const ListingCard = ({
  image,
  type,
  title,
  tenants,
  baths,
  beds,
  description,
  price,
}) => {
  return (
    <Card>
      <ImageContainer src={image} />
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
          <ListingDescription>{description}</ListingDescription>
        </ListingDescriptionContainer>
      </ListingDetailsContainer>

      <HR />
      <CanoneContainer>
        <CanoneTitle>Canone d'affitto</CanoneTitle>
        <CanonePriceContainer>
          <CanonePrice>€&nbsp;{price}&nbsp;</CanonePrice>
          <CanoneMese>/mese</CanoneMese>
        </CanonePriceContainer>
      </CanoneContainer>
    </Card>
  );
};

export default ListingCard;
