import styled from 'styled-components';

export const ButtonLearn = styled.button`
  width: 274px;
  height: 44px;
  padding: 12px;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;

  color: var(--white);
  background-color: var(--blue);
  border: none;
  border-radius: 12px;
  transition: var(--cubic);

  &:hover,
  &:focus {
    background-color: var(--blue-second);
    box-shadow: none;
  }

  // &:active {
  //   box-shadow: none;
  //   background-color: #0b44cd;
  // }
`;

export const ButtonRental = styled(ButtonLearn)`
  width: 168px;
`;
