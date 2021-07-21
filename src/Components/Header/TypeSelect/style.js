import styled from 'styled-components';

export const MenuButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  position: relative;
  background-color: white;
  border-radius: 25px;
  width: 180px;
  height: 45px;
  border: 2px solid gainsboro;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: darkgray;
`;

export const CaretImage = styled.img`
  position: absolute;
  right: 10px;
  width: 25px;
`;

export const PropertyTypeMenu = styled.div`
  display: none;

  &.open {
    visibility: visible;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 165px;
    min-width: 180px;
    padding: 12px;
    background-color: white;
    border: 2px solid gainsboro;
    border-radius: 25px;
    z-index: 100;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
`;

export const PropertyTypeLabel = styled.label`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: darkgray;
  padding-left: 6px;
`;
