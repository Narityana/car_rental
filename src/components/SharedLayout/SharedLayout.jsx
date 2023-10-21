import { Suspense } from 'react';
import Loader from 'components/Loader';
import LogoImage from '../../images/Frame 22LogoYitle.png';
import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  Header,
  Links,
  IconLogo,
  NavContainer,
  ContainerLogo,
  Main,
  Footer,
  LogoTitle,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <ContainerLogo>
          <IconLogo />
          <div>
            <LogoTitle src={LogoImage} alt="logo" />
          </div>
        </ContainerLogo>
        <NavContainer>
          <Links to="/">Home</Links>
          <Links to="/catalog">Catalog</Links>
          <Links to="/favorites">Favorites</Links>
        </NavContainer>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>Ukraine {new Date().getFullYear()}</Footer>
    </Wrapper>
  );
};

export default SharedLayout;
