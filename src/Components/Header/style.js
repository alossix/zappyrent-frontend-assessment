import styled from 'styled-components';

import Logo from './zappyrent.png';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  padding: 0 150px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 6px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 180px;
`;

export const ZappyRentLogo = styled.img.attrs({
  src: `${Logo}`,
})`
  height: 30px;
`;

export const SelectContainer = styled.div`
  display: flex;
  height: 70px;
  align-items: flex-end;
  padding-left: 60px;
`;
