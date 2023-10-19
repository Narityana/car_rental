import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <div>{children}</div>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
