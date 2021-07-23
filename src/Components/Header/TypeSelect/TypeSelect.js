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

  const propertyTypeArr = propertyType.map((p) => p);

  const clickHandler = (event) => {
    setMenuIsOpen((isOpen) => !isOpen);
  };

  const menuText = () => {
    if (menuIsOpen) {
      return 'Tipologia';
    } else {
      if (propertyTypeArr.length === 0) {
        return 'Tipologia';
      } else if (propertyTypeArr.length === 1) {
        return `${propertyTypeArr[0]}`;
      }
      return `${propertyTypeArr[0]} +${propertyTypeArr.length - 1}`;
    }
  };

  const changePropertyType = (event) => {
    if (event.target.checked) {
      propertyTypeArr.push(event.target.name);
      setPropertyType(
        propertyTypeArr.sort(
          (a, b) =>
            propertyTypes.indexOf(a) - propertyTypes.indexOf(b),
        ),
      );
    } else {
      propertyTypeArr.splice(
        propertyTypeArr.indexOf(event.target.name),
        1,
      );
      setPropertyType(propertyTypeArr);
    }
  };

  const propertyTypes = [
    'Private Room',
    'Entire Property',
    'Shared Room',
    'Studio',
  ];

  return (
    <>
      <MenuButton onClick={clickHandler}>
        {menuText()}
        <CaretImage
          src={menuIsOpen ? CaretDown : CaretUp}
          alt="caret"
        />
      </MenuButton>
      <PropertyTypeMenu className={menuIsOpen ? 'open' : ''}>
        {propertyTypes.map((val, index) => (
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
