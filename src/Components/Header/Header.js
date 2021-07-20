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

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <LogoContainer>
          <ZappyRentLogo />
        </LogoContainer>
        <SelectContainer>
          <TypeSelect />
          <AvailableSelect />
        </SelectContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
