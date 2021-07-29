import React, { useContext } from 'react';

import ModalContext from '../../../../store/modal-context';
import ListingContext from '../../../../store/listing-context';
import Checkbox from '../../../Common/Checkbox/Checkbox';

import {
  PropertyTypeMenuDiv,
  OptionContainer,
  PropertyTypeLabel,
} from './style';

const PropertyTypeMenu = () => {
  const { modalIsOpen } = useContext(ModalContext);
  const { menuIsOpen, propertyTypes, changePropertyType } =
    useContext(ListingContext);

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
