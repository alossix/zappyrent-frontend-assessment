import React from 'react';

import {
  CanoneContainer,
  CanonePriceContainer,
  CanoneTitle,
  CanonePrice,
  CanoneMese,
  ReserveButton,
} from './style';

const Canone = ({ price, modalCloseHandler }) => {
  return (
    <CanoneContainer>
      <CanonePriceContainer>
        <CanoneTitle>Canone d’affitto</CanoneTitle>
        <CanonePrice>€&nbsp;{price}&nbsp;</CanonePrice>
        <CanoneMese>/mese</CanoneMese>
      </CanonePriceContainer>
      <ReserveButton onClick={modalCloseHandler}>
        Prenota alloggio
      </ReserveButton>
    </CanoneContainer>
  );
};

export default Canone;
