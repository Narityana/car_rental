import PropTypes from 'prop-types';
import { ButtonLearn } from './Button.styled';

const Button = ({ text, onClick }) => {
  return (
    <ButtonLearn type="button" onClick={onClick}>
      {text}
    </ButtonLearn>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
