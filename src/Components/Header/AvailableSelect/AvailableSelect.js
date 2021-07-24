import React from 'react';

import Checkbox from '../../Common/Checkbox/Checkbox';

import { AvailableContainer, AvailableLabel } from './style';

const AvailableSelect = ({ setAvailableChecked }) => {
  const availableChecked = (event) =>
    setAvailableChecked(event.target.checked);

  return (
    <AvailableContainer>
      <AvailableLabel htmlFor="available">
        Disponibile subito
      </AvailableLabel>
      <Checkbox
        id="available"
        name="available"
        onChange={(event) => availableChecked(event)}
      />
    </AvailableContainer>
  );
};

export default AvailableSelect;
