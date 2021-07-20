import React from 'react';

import { TypeSelectMenu } from './style';

const TypeSelect = () => {
  return (
    <div>
      <TypeSelectMenu
        name="tipologia"
        id="tipologia"
        defaultValue={'Tipologia'}
      >
        <option value="Tipologia" disabled hidden>
          Tipologia
        </option>
        <option value="private">Private room</option>
        <option value="entire">Entire property</option>
        <option value="shared">Shared room</option>
        <option value="studio">Studio</option>
      </TypeSelectMenu>
    </div>
  );
};

export default TypeSelect;
