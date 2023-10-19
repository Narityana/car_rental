import { Suspense } from 'react';
import Loader from 'components/Loader';
import { Outlet } from 'react-router-dom';
import {
  Header,
  Links,
  IconHeader,
  LogoTitle,
  NavContainer,
  Container,
  Main,
  Footer,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <IconHeader />
          <LogoTitle>DriveEasy Rentals</LogoTitle>
          <NavContainer>
            <Links to="/">Home</Links>
            <Links to="/catalog">Catalog</Links>
          </NavContainer>
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>Ukraine {new Date().getFullYear()}</Footer>
    </>
  );
};

export default SharedLayout;
