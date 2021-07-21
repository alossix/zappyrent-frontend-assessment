import React, { useState } from 'react';

import Checkbox from '../../Common/Checkbox/Checkbox';
import {
  MenuButton,
  PropertyTypeMenu,
  OptionContainer,
  PropertyTypeLabel,
} from './style';

const TypeSelect = ({ propertyType, setPropertyType }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const clickHandler = (event) => {
    setMenuIsOpen((isOpen) => !isOpen);
  };

  const propertyTypeArr = propertyType.map((p) => p);

  const changePropertyType = (event) => {
    if (event.target.checked) {
      propertyTypeArr.push(event.target.value);
      setPropertyType(propertyTypeArr);
    } else {
      propertyTypeArr.splice(
        propertyTypeArr.indexOf(event.target.value),
        1,
      );
      setPropertyType(propertyTypeArr);
    }
  };

  const propertyTypeValues = [
    'Private Room',
    'Entire Property',
    'Shared Room',
    'Studio',
  ];

  return (
    <>
      <MenuButton onClick={clickHandler}>Tipologia</MenuButton>
      {menuIsOpen && (
        <PropertyTypeMenu>
          {propertyTypeValues.map((val, index) => (
            <OptionContainer>
              <Checkbox
                labelName={val}
                id={val}
                name={val}
                onChange={changePropertyType}
              />
              <PropertyTypeLabel htmlFor={val}>
                {val}
              </PropertyTypeLabel>
            </OptionContainer>
          ))}
        </PropertyTypeMenu>
      )}
    </>
  );
};

export default TypeSelect;
