import React, { useContext } from 'react';
import ModalContext from '../../../../store/modal-context';

import {
  CanoneContainer,
  CanonePriceContainer,
  CanoneTitle,
  CanonePrice,
  CanoneMese,
  ReserveButton,
} from './style';

const Canone = ({ price }) => {
  const { modalCloseHandler } = useContext(ModalContext);

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
