import React from 'react';
import './PopupWithForm.css';

import ModalWindow from '../ModalWindow/ModalWindow';
import AccentButton from '../ui/AccentButton/AccentButton';

function PopupWithForm({
  isOpen,
  onClose,
  formTitle = '',
  submitButtonCaption = '',
  isSubmitButtonActive,
  handleSubmit,
  serverError = 'Тест: Ошибка на сервере',
  children,
  additionalAction,
}) {
  const submitHandler = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
      title={formTitle}
      additionalAction={additionalAction}
    >
      <form
        className="form"
        noValidate
        onSubmit={submitHandler}
      >
        {children}

        <span className="form__server-error">{serverError}</span>
        <AccentButton
          caption={submitButtonCaption}
          isSubmit
          isActive={isSubmitButtonActive}
          className="form__submit-button"
        />
      </form>
    </ModalWindow>
  );
}

export default PopupWithForm;
