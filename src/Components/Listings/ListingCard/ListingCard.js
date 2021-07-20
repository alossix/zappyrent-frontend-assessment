import React from 'react';

import ListingDescription from './ListingDescription/ListingDescription';

import {
  Card,
  ImageContainer,
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
