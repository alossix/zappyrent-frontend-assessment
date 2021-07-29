import React, { useContext } from 'react';
import ListingContext from '../../../store/listing-context';

import Checkbox from '../../Common/Checkbox/Checkbox';

import { AvailableContainer, AvailableLabel } from './style';

const AvailableSelect = () => {
  const { availableCheckedHandler } = useContext(ListingContext);

  return (
    <AvailableContainer>
      <AvailableLabel htmlFor="available">
        Disponibile subito
      </AvailableLabel>
      <Checkbox
        id="available"
        name="available"
        onChange={(event) => availableCheckedHandler(event)}
      />
    </AvailableContainer>
  );
};

export default AvailableSelect;
