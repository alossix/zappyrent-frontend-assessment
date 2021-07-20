import React from 'react';

import { TypeSelectMenu } from './style';

const TypeSelect = ({ listings, setPropertyType }) => {
  const typeSelected = (event) => {
    setPropertyType(event.target.value);
  };

  return (
    <div>
      <TypeSelectMenu
        name="tipologia"
        id="tipologia"
        defaultValue={'Tipologia'}
        onChange={(event) => typeSelected(event)}
      >
        <option value="Tipologia" disabled hidden>
          Tipologia
        </option>
        <option value="Private Room">Private room</option>
        <option value="Entire Property">Entire property</option>
        <option value="Shared Room">Shared room</option>
        <option value="Studio">Studio</option>
      </TypeSelectMenu>
    </div>
  );
};

export default TypeSelect;
