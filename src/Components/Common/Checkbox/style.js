import styled from 'styled-components';

export const CustomCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid lightgray;
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: #05a8a4;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      display: flex;
      justify-content: center;
      align-items: center;
      content: '';
      position: absolute;
      width: 76%;
      height: 75%;
      border: 4px solid white;
      border-radius: 6px;
    }
  }
`;
