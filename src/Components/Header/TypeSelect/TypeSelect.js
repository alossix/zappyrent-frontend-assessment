import React, { useContext } from 'react';

import ListingContext from '../../../store/listing-context';
import CaretDown from './caret-down.png';
import CaretUp from './caret-up.png';
import PropertyTypeMenu from './PropertyTypeMenu/PropertyTypeMenu';

import { MenuButton, CaretImage } from './style';

const TypeSelect = () => {
  const {
    menuClickHandler,
    menuText,
    propertyTypeArr,
    setPropertyType,
    menuIsOpen,
    isActive,
  } = useContext(ListingContext);

  return (
    <>
      <MenuButton
        onClick={menuClickHandler}
        className={isActive && 'active'}
      >
        {menuText()}
        <CaretImage
          src={menuIsOpen ? CaretUp : CaretDown}
          alt="caret"
        />
      </MenuButton>
      <PropertyTypeMenu
        propertyTypeArr={propertyTypeArr}
        setPropertyType={setPropertyType}
        menuIsOpen={menuIsOpen}
      />
    </>
  );
};

export default TypeSelect;
