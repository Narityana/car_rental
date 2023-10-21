import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 128px;
`;

export const List = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const Item = styled.li`
  transition: var(--cubic);
  margin-bottom: 20px;
  &:hover {
    color: rgb(245 244 154);
    font-size: 18px;
  }
`;
