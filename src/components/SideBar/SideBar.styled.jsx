import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100vh;

  height: 100%;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: none;
`;
export const Links = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--text-black);
  font-weight: 500;
  font-size: 1.5rem;

  &:hover {
    border: 1px solid var(--blue);
    box-shadow: var(--shadow);
  }

  &.active {
    background-color: var(--blue);
    color: var(--secondwhite);
    box-shadow: var(--shadow);
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
