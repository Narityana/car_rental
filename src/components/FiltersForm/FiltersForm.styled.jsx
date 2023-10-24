import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 859px;
  height: 74px;
  margin: 20px auto 0;
  // background-color: var(--secondwhite);
`;

export const Form = styled.form`
  display: flex;
  gap: 18px;
`;

export const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputsWrap = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 160px;
  height: 48px;
  padding: 0 24px;
  margin-top: 8px;
  // border: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  background: var(--secondwhite);

  &:first-child {
    border-radius: 14px 0 0 14px;
    border: 1px solid rgba(138, 138, 137, 0.2);
  }

  &:last-child {
    border-radius: 0 14px 14px 0;
    border: 1px solid rgba(138, 138, 137, 0.2);
  }

  &:focus {
    border: 2px solid var(--blue);
    outline: none;
  }

  ::placeholder {
    margin-left: 3px;
  }
`;
