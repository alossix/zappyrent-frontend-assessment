import React from 'react';

import { AvailableSelectCheckbox } from './style';

const AvailableSelect = () => {
  const availableChecked = (event) => {
    // need to filter results based on boolean 'available' t/f
    console.log(event.target.checked);
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
