import styled from 'styled-components';

export const CustomCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  min-width: 30px;
  min-height: 30px;
  border: 2px solid gainsboro;
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
      width: 77%;
      height: 77%;
      border: 3px solid white;
      border-radius: 6px;
    }
  }
`;
