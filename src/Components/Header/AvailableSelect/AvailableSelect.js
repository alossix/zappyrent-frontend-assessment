import React from 'react';

import { AvailableSelectCheckbox } from './style';

const AvailableSelect = () => {
  const availableChecked = () => {
    console.log(`this runs`);
    // need to filter results based on boolean 'available' t/f
  };

  return (
    <>
      <label htmlFor="available">Disponibile subito</label>
      <AvailableSelectCheckbox
        id="available"
        name="available"
        onClick={availableChecked}
      />
    </>
  );
};

export default AvailableSelect;
