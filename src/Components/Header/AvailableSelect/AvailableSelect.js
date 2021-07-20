import React from 'react';

import { AvailableSelectCheckbox } from './style';

const AvailableSelect = ({ listings, setAvailableChecked }) => {
  const availableChecked = (event) => {
    console.log(event.target.checked);
    setAvailableChecked(event.target.checked);
  };

  return (
    <>
      <label htmlFor="available">Disponibile subito</label>
      <AvailableSelectCheckbox
        id="available"
        name="available"
        onChange={(event) => availableChecked(event)}
      />
    </>
  );
};

export default AvailableSelect;
