import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListNetworks = styled.ul`
  gap: 20px;

  display: flex;

  justify-content: center;
`;
export const Item = styled.li``;

export const Link = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 50%;
  color: var(--text-black);
  font-weight: 500;
  font-size: 1.5rem;

  &:hover,
  &:focus {
    border: 1px solid var(--blue);
    box-shadow: var(--shadow);
    background-color: var(--blue);

    svg {
      fill: var(--white);
    }
  }
`;
