import React from 'react';
import './PopupWithForm.css';

import ModalWindow from '../ModalWindow/ModalWindow';
import AccentButton from '../ui/AccentButton/AccentButton';

function PopupWithForm({
  formTitle = '',
  submitButtonCaption = '',
  serverError = 'Тест: Ошибка на сервере',
  children,
  additionalAction,
  isOpen,
  isSubmitButtonActive,
  onClose,
  onSubmit,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <ModalWindow
      title={formTitle}
      additionalAction={additionalAction}
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        className="form"
        noValidate
        onSubmit={handleSubmit}
      >
        {children}

        <span className="form__server-error">{serverError}</span>
        <AccentButton
          caption={submitButtonCaption}
          isSubmit
          disabled={!isSubmitButtonActive}
          className="form__submit-button"
        />
      </form>
    </ModalWindow>
  );
}

export default PopupWithForm;
