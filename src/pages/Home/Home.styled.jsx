import styled from 'styled-components';
import backgroundImage from '../../images/background_main.png';

export const Container = styled.main`
  display: flex;
  width: 100%;
  min-height: 800px;
  padding: 10px 50px 10px 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  justify-content: space-between;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 66px;
  line-height: 1.36;
`;

export const Text = styled.p`
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 10px;
  // color: var(--secondwhite);
`;

export const TextWrap = styled.div`
  display: flex;
  width: 600px;

  padding: 30px;

  border-radius: 50px;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
`;
