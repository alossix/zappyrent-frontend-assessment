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

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <ZappyRentLogo alt="ZappyRent logo" />
      </LogoContainer>
      <SelectContainer>
        <TypeSelect />
        <AvailableSelect />
      </SelectContainer>
    </HeaderContainer>
  );
};

export default Header;
