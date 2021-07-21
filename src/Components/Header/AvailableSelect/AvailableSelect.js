import React from 'react';

import { AvailableNowLabel, AvailableSelectCheckbox } from './style';

const AvailableSelect = ({ listings, setAvailableChecked }) => {
  const availableChecked = (event) => {
    setAvailableChecked(event.target.checked);
  };

  return (
    <>
      <AvailableNowLabel htmlFor="available">
        Disponibile subito
      </AvailableNowLabel>
      <AvailableSelectCheckbox
        id="available"
        name="available"
        onChange={(event) => availableChecked(event)}
      />
    </>
  );
};

export default AvailableSelect;
