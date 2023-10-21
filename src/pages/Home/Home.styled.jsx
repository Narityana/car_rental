import styled from 'styled-components';
import backgroundImage from '../../images/background_main.png';

export const Container = styled.main`
  width: 100%;
  min-height: 800px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
