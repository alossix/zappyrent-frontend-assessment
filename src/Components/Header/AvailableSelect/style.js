import styled from 'styled-components';

export const AvailableNowLabel = styled.label`
  color: gray;
`;

export const AvailableSelectCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  width: 24px;
  min-width: 24px;
  height: 24px;
  border: 1px solid lightgray;
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: #05a8a4;
    &:after {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      border: 3px solid white;
      border-radius: 7px;
    }
  }
`;
