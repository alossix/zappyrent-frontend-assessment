import React from 'react';

import Checkbox from '../../../Common/Checkbox/Checkbox';

import {
  PropertyTypeMenuDiv,
  OptionContainer,
  PropertyTypeLabel,
} from './style';

const PropertyTypeMenu = ({
  propertyTypeArr,
  setPropertyType,
  modalIsOpen,
  menuIsOpen,
}) => {
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
    <PropertyTypeMenuDiv
      className={menuIsOpen && !modalIsOpen ? 'open' : ''}
    >
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
    </PropertyTypeMenuDiv>
  );
};

export default PropertyTypeMenu;
