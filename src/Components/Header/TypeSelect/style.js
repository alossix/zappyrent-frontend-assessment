import styled from 'styled-components';

export const MenuButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  position: relative;
  background-color: white;
  border-radius: 25px;
  width: 185px;
  height: 45px;
  border: 2px solid lightgray;
  font-size: 16px;
  font-weight: 600;
  color: darkgray;

  &.active {
    color: black;
  }

  @media (max-width: 780px) {
    width: 174px;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const CaretImage = styled.img`
  position: absolute;
  right: 10px;
  width: 25px;
`;
