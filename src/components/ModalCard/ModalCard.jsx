import Icon from '../images/icons.svg';
import Button from 'components/Button';
const ModalCard = onClose => {
  return (
    <div>
      <button type="button" aria-label="close button" onClick={onClose}>
        <svg width="24" height="24">
          <use href={`${Icon}#icon-x`} />
        </svg>
      </button>

      <Button buttonName="Rent Car" width="168px" />
    </div>
  );
};

export default ModalCard;
