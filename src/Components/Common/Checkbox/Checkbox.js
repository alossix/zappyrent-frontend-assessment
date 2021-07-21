import React from 'react';

import { CustomCheckbox } from './style';

const Checkbox = ({ id, name, onChange }) => {
  return <CustomCheckbox id={id} name={name} onChange={onChange} />;
};

export default Checkbox;
