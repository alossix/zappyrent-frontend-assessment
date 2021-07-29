import React, { useContext } from 'react';
import ListingContext from '../../../store/listing-context';

import Checkbox from '../../Common/Checkbox/Checkbox';

import { AvailableContainer, AvailableLabel } from './style';

const AvailableSelect = () => {
  const listingCtx = useContext(ListingContext);

  return (
    <AvailableContainer>
      <AvailableLabel htmlFor="available">
        Disponibile subito
      </AvailableLabel>
      <Checkbox
        id="available"
        name="available"
        onChange={(event) =>
          listingCtx.availableCheckedHandler(event)
        }
      />
    </AvailableContainer>
  );
};

export default AvailableSelect;
