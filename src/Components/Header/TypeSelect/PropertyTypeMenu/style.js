import styled from 'styled-components';

export const PropertyTypeMenuDiv = styled.div`
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
    border: 2px solid lightgray;
    border-radius: 25px;
    z-index: 100;

    @media (max-width: 780px) {
      top: 115px;
    }
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
`;

export const PropertyTypeLabel = styled.label`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: darkgray;
  padding-left: 6px;
`;
