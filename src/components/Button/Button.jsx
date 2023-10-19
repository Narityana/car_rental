import { ButtonStyled } from './Button.styled';

const Button = ({ buttonName, onClick, width }) => {
  return (
    <ButtonStyled type="button" onClick={onClick} width={width}>
      {buttonName}
    </ButtonStyled>
  );
};

export default Button;
