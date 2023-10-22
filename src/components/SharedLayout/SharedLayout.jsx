import { Suspense } from 'react';
import Loader from 'components/Loader';
import SideBare from 'components/SideBar/SideBar';
import LogoImage from '../../images/Frame 22LogoYitle.png';
import SocialNetwork from 'components/SocialNetwork/SocialNetwork';
import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  Header,
  // Links,
  IconLogo,
  // NavContainer,
  ContainerLogo,
  Main,
  Footer,
  LogoTitle,
  Section,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <Section>
          <Header>
            <ContainerLogo>
              <IconLogo />
              <div>
                <LogoTitle src={LogoImage} alt="logo" />
              </div>
            </ContainerLogo>
            <SocialNetwork></SocialNetwork>
          </Header>
          <Main>
            <SideBare></SideBare>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Main>
        </Section>
      </Wrapper>
      <Footer>© 2023 TetianaPonomarchuk</Footer>
    </>
  );
};

export default SharedLayout;
