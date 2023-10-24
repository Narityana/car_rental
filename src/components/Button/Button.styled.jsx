import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: ${props => props.width};
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

  &.disabled {
    box-shadow: none;
    background-color: var(--text-grey-darck);
  }
`;
