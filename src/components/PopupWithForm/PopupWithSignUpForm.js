import React, { useEffect } from 'react';
import './PopupWithForm.css';

import PopupWithForm from './PopupWithForm';

import useValidatedState from '../../utils/useValidatedState';

function PopupWithSignUpForm({
  isOpen,
  onClose,
  onOpenLoginPopup,
  onOpenSignUpMessagePopup,
}) {
  const {
    inputState: emailInputState,
    onChange: handleEmailInputChange,
    reset: resetEmailInput,
  } = useValidatedState('');

  const {
    inputState: passwordInputState,
    onChange: handlePasswordInputChange,
    reset: resetPasswordInput,
  } = useValidatedState('');

  const {
    inputState: nameInputState,
    onChange: handleNameInputChange,
    reset: resetNameInput,
  } = useValidatedState('');

  const resetInputs = () => {
    resetEmailInput('');
    resetPasswordInput('');
    resetNameInput('');
  };

  const handleSignUp = () => {
    onOpenSignUpMessagePopup();
  };

  useEffect(() => {
    if (!isOpen) {
      resetInputs();
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      formTitle="Регистрация"
      submitButtonCaption="Зарегистрироваться"
      additionalAction={{
        text: 'или',
        buttonCaption: 'Войти',
        handler: onOpenLoginPopup,
      }}
      isOpen={isOpen}
      isSubmitButtonActive={
        emailInputState.isValid && passwordInputState.isValid && nameInputState.isValid
      }
      onClose={onClose}
      onSubmit={handleSignUp}
    >
      <label className="form__input-label" htmlFor="signup-email">
        Email
        <input
          className="form__input"
          id="signup-email"
          type="email"
          name="email"
          placeholder="Введите почту"
          required
          value={emailInputState.value}
          onChange={handleEmailInputChange}
        />
        <span className="form__input-error">{emailInputState.errorMessage}</span>
      </label>

      <label className="form__input-label" htmlFor="signup-password">
        Пароль
        <input
          className="form__input"
          id="signup-password"
          type="password"
          name="password"
          placeholder="Введите пароль"
          required
          value={passwordInputState.value}
          onChange={handlePasswordInputChange}
        />
        <span className="form__input-error">{passwordInputState.errorMessage}</span>
      </label>

      <label className="form__input-label" htmlFor="signup-name">
        Имя
        <input
          className="form__input"
          id="signup-name"
          type="text"
          name="name"
          placeholder="Введите своё имя"
          minLength="2"
          maxLength="30"
          required
          value={nameInputState.value}
          onChange={handleNameInputChange}
        />
        <span className="form__input-error">{nameInputState.errorMessage}</span>
      </label>

    </PopupWithForm>
  );
}

export default PopupWithSignUpForm;
