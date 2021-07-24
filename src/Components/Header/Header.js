import React from 'react';

// Local imports
import TypeSelect from './TypeSelect/TypeSelect';
import AvailableSelect from './AvailableSelect/AvailableSelect';

import {
  HeaderContainer,
  LogoContainer,
  ZappyRentLogo,
  SelectContainer,
} from './style';

const Header = ({
  listings,
  propertyType,
  setPropertyType,
  modalIsOpen,
  setAvailableChecked,
}) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <ZappyRentLogo alt="ZappyRent logo" />
      </LogoContainer>
      <SelectContainer>
        <TypeSelect
          listings={listings}
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          modalIsOpen={modalIsOpen}
        />
        <AvailableSelect setAvailableChecked={setAvailableChecked} />
      </SelectContainer>
    </HeaderContainer>
  );
};

export default Header;
