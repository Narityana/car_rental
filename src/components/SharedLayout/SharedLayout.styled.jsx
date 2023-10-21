import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoCarSportSharp } from 'react-icons/io5';

export const Wrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  background-color: white;
`;

export const Header = styled.header`
  padding: 10px 30px;
  height: 100px;
  display: flex;

  align-items: center;
  width: 100%;
  border-bottom: 2px solid var(--blue);
`;
export const ContainerLogo = styled.div`
  display: flex;
  width: 1200px;
  align-items: flex-end;
  margin: 0 auto;
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

export const Footer = styled.footer`
margin-top: 20px;  
padding: 10px 30px;
  height: 70px;
  display: flex;
  width: 100%;
  border-top: 1px solid #fff;
  
  justify-content: center;
  align-items: center;
}
`;

export const IconLogo = styled(IoCarSportSharp)`
  color: var(--blue);
  width: 80px;
  height: 80px;
`;

export const LogoTitle = styled.img`
  height: 60px;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Main = styled.main`
  width: 100%;
  margin: 0px auto;
`;
