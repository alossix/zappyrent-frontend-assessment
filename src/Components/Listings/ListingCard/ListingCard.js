import React from 'react';

import ListingDescription from './ListingDescription/ListingDescription';

import {
  Card,
  ImageContainer,
  AvailableButton,
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
  available,
}) => {
  return (
    <Card>
      <ImageContainer src={image}>
        {available && (
          <AvailableButton>Disponibile subito</AvailableButton>
        )}
      </ImageContainer>
      <ListingDescription
        image={image}
        type={type}
        title={title}
        tenants={tenants}
        baths={baths}
        beds={beds}
        description={description}
      />
      <CanoneContainer>
        <CanoneTitle>Canone d’affitto</CanoneTitle>
        <CanonePriceContainer>
          <CanonePrice>€&nbsp;{price}&nbsp;</CanonePrice>
          <CanoneMese>/mese</CanoneMese>
        </CanonePriceContainer>
      </CanoneContainer>
    </Card>
  );
};

export default ListingCard;
