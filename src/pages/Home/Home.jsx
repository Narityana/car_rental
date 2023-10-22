import { Container, Title, Text, TextWrap } from './Home.styled';
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <Container>
      <Title>Rent a car cheaply</Title>

      <TextWrap>
        <Text>
          Book a car for hire at a low price and get the next rental with a 25%
          discount!
        </Text>
        <NavLink to="/catalog">
          <Button buttonName="Lets Go!" width="168px" />
        </NavLink>
      </TextWrap>
    </Container>
  );
};

export default Home;
