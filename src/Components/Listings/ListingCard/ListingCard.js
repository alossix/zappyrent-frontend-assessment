import React from 'react';

import ListingDescription from './ListingDescription/ListingDescription';
import Canone from './Canone/Canone';

import { Card, ImageContainer, AvailableButton } from './style';

const ListingCard = ({ listing, modalOpenHandler }) => {
  const {
    images,
    type,
    title,
    tenants,
    baths,
    beds,
    description,
    price,
    available,
  } = listing;

  return (
    <Card onClick={(e) => modalOpenHandler(e, listing)}>
      <ImageContainer src={images[0].url}>
        {available && (
          <AvailableButton>Disponibile subito</AvailableButton>
        )}
      </ImageContainer>
      <ListingDescription
        type={type}
        title={title}
        tenants={tenants}
        baths={baths}
        beds={beds}
        description={description}
      />
      <Canone price={price} />
    </Card>
  );
};

export default ListingCard;
