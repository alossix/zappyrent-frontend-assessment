import React from 'react';

// Global imports

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
  setPropertyType,
  setAvailableChecked,
}) => {
  return (
    <div>
      <HeaderContainer>
        <LogoContainer>
          <ZappyRentLogo />
        </LogoContainer>
        <SelectContainer>
          <TypeSelect
            listings={listings}
            setPropertyType={setPropertyType}
          />
          <AvailableSelect
            listings={listings}
            setAvailableChecked={setAvailableChecked}
          />
        </SelectContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
