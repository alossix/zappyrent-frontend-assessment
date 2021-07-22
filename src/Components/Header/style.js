import styled from 'styled-components';

import Logo from './zappyrent.png';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 180px;
  padding: 0 150px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 6px;

  @media (max-width: 780px) {
    height: 120px;
    padding: 0 13px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 180px;

  @media (max-width: 780px) {
    padding: 25px 0;
  }
`;

export const ZappyRentLogo = styled.img.attrs({
  src: `${Logo}`,
})`
  height: 20px;

  @media (max-width: 780px) {
    height: 25px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 70px;
  padding-left: 60px;
  padding-bottom: 20px;

  @media (max-width: 780px) {
    padding-left: 0;
  }
`;
