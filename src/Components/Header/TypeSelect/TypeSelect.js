import React, { useState } from 'react';

import CaretDown from './caret-down.png';
import CaretUp from './caret-up.png';
import PropertyTypeMenu from './PropertyTypeMenu/PropertyTypeMenu';

import { MenuButton, CaretImage } from './style';

const TypeSelect = ({
  propertyType,
  setPropertyType,
  modalIsOpen,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const propertyTypeArr = propertyType.map((p) => p);

  const menuClickHandler = () => setMenuIsOpen((isOpen) => !isOpen);

  const menuText = () => {
    if (menuIsOpen || propertyTypeArr.length === 0) {
      return 'Tipologia';
    } else if (propertyTypeArr.length === 1) {
      return `${propertyTypeArr[0]}`;
    } else {
      return `${propertyTypeArr[0]} +${propertyTypeArr.length - 1}`;
    }
  };

  return (
    <>
      <MenuButton onClick={menuClickHandler}>
        {menuText()}
        <CaretImage
          src={menuIsOpen ? CaretUp : CaretDown}
          alt="caret"
        />
      </MenuButton>
      <PropertyTypeMenu
        propertyTypeArr={propertyTypeArr}
        setPropertyType={setPropertyType}
        modalIsOpen={modalIsOpen}
        menuIsOpen={menuIsOpen}
      />
    </>
  );
};

export default TypeSelect;
