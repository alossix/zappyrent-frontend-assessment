import styled from 'styled-components';

export const MenuButton = styled.button`
  position: relative;
  background-color: white;
  border-radius: 25px;
  width: 200px;
  height: 50px;
  border: 2px solid lightgray;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: gray;
`;

export const PropertyTypeMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 255px;
  min-width: 220px;
  padding: 15px;
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 25px;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
`;

export const PropertyTypeLabel = styled.label`
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: gray;
  padding-left: 10px;
`;
