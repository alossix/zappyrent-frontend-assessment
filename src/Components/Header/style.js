import styled from 'styled-components';

import Logo from './zappyrent.png';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: lightblue;
`;

export const LogoContainer = styled.div`
  height: 50px;
  background-color: lightcoral;
`;

export const ZappyRentLogo = styled.img.attrs({
  src: `${Logo}`,
})`
  height: 50px;
`;

export const SelectContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
