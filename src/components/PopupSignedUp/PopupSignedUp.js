import React from 'react';
import './PopupSignedUp.css';

import ModalWindow from '../ModalWindow/ModalWindow';

function PopupSignedUp({
  isOpen,
  onClose,
  openPopupWithLogin,
}) {
  return (
    <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
      title="Пользователь успешно зарегистрирован!"
      className="popup-signed-up"
    >
      <button
        className="popup-signed-up__button"
        type="button"
        onClick={openPopupWithLogin}
      >
        Войти
      </button>
    </ModalWindow>
  );
}

export default PopupSignedUp;
