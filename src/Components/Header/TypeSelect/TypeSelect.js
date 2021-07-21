import React, { useState } from 'react';

import Checkbox from '../../Common/Checkbox/Checkbox';
import CaretDown from './caret-down.png';
import CaretUp from './caret-up.png';

import {
  MenuButton,
  CaretImage,
  PropertyTypeMenu,
  OptionContainer,
  PropertyTypeLabel,
} from './style';

const TypeSelect = ({ propertyType, setPropertyType }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const clickHandler = (event) => {
    setMenuIsOpen((isOpen) => !isOpen);
    console.log(menuIsOpen);
  };

  const propertyTypeArr = propertyType.map((p) => p);

  const changePropertyType = (event) => {
    if (event.target.checked) {
      propertyTypeArr.push(event.target.name);
      console.log(propertyTypeArr);
      setPropertyType(propertyTypeArr);
    } else {
      console.log(`runs too`);
      propertyTypeArr.splice(
        propertyTypeArr.indexOf(event.target.name),
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
      <MenuButton onClick={clickHandler}>
        Tipologia{' '}
        <CaretImage src={menuIsOpen ? CaretDown : CaretUp} />
      </MenuButton>

      <PropertyTypeMenu className={menuIsOpen ? 'open' : ''}>
        {propertyTypeValues.map((val, index) => (
          <OptionContainer key={index}>
            <Checkbox
              labelName={val}
              id={val}
              name={val}
              onChange={changePropertyType}
            />
            <PropertyTypeLabel htmlFor={val}>{val}</PropertyTypeLabel>
          </OptionContainer>
        ))}
      </PropertyTypeMenu>
    </>
  );
};

export default TypeSelect;
