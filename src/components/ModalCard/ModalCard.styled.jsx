import styled from 'styled-components';

export const ModalWrap = styled.div`
  background-color: var(--white);
  width: 541px;
  min-height: 752px;
  padding: 40px 36px;
  position: relative;
  border-radius: 24px;
`;

export const ButtonX = styled.button`
  background: none;
  border: none;
  position: absolute;
  padding: 0;
  right: 16px;
  top: 16px;
`;

export const Description = styled.p`
  color: var(--text-black);

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1, 4;
  margin-top: 14px;
`;
export const Title = styled.h4`
  color: var(--text-black);
  margin: 24px 0 8px;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
`;
export const P = styled.p`
  display: flex;
  align-items: center;
`;
export const Item = styled.li`
  padding: 0 6px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-grey);
  :not(:last-child) {
    border-right: 1px solid var(--border-grey);
  }
`;
export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
`;

export const RentalItem = styled.li`
  background-color: var(--condition-back);
  color: var(--condition-text);
  padding: 7px 14px;
  border-radius: 35px;
  font-size: 12px;
  line-height: 1.5;

  span {
    font-weight: 600;
    color: var(--blue);
  }
`;
