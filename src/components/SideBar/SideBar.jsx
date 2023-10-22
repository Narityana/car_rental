import { Wrapper, NavContainer, Links } from './SideBar.styled';

const SideBare = () => {
  return (
    <Wrapper>
      <NavContainer>
        <Links to="/">Home</Links>
        <Links to="/catalog">Catalog</Links>
        <Links to="/favorites">Favorites</Links>
      </NavContainer>
    </Wrapper>
  );
};

export default SideBare;
