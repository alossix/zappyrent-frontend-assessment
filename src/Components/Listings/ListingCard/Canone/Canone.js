import React from 'react';

import {
  CanoneContainer,
  CanoneTitle,
  CanonePriceContainer,
  CanonePrice,
  CanoneMese,
} from './style';

const Canone = ({ price }) => {
  return (
    <CanoneContainer>
      <CanoneTitle>Canone d’affitto</CanoneTitle>
      <CanonePriceContainer>
        <CanonePrice>€&nbsp;{price}&nbsp;</CanonePrice>
        <CanoneMese>/mese</CanoneMese>
      </CanonePriceContainer>
    </CanoneContainer>
  );
};

export default Canone;
