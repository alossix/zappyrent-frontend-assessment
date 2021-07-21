import styled from 'styled-components';

export const AvailableNowLabel = styled.label`
  color: gray;
  font-size: 22px;
`;

export const AvailableSelectCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  width: 28px;
  min-width: 28px;
  height: 28px;
  border: 2px solid lightgray;
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: #05a8a4;
    &:after {
      content: '';
      position: absolute;
      left: -1px;
      top: -1px;
      width: 17px;
      height: 17px;
      border: 4px solid white;
      border-radius: 6px;
    }
  }
`;
