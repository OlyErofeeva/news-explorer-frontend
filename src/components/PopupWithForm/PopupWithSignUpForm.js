import React, { useEffect } from 'react';
import './PopupWithForm.css';

import PopupWithForm from './PopupWithForm';

import useValidatedState from '../../utils/useValidatedState';

function PopupWithSignUpForm({
  isOpen,
  onClose,
  openLoginPopup,
  openSignUpMessagePopup,
}) {
  const {
    inputState: emailInputState,
    onChange: onEmailInputChange,
    reset: resetEmailInput,
  } = useValidatedState('');

  const {
    inputState: passwordInputState,
    onChange: onPasswordInputChange,
    reset: resetPasswordInput,
  } = useValidatedState('');

  const {
    inputState: nameInputState,
    onChange: onNameInputChange,
    reset: resetNameInput,
  } = useValidatedState('');

  const resetInputs = () => {
    resetEmailInput('');
    resetPasswordInput('');
    resetNameInput('');
  };

  const handleSignUp = () => {
    openSignUpMessagePopup();
  };

  useEffect(() => {
    if (!isOpen) {
      resetInputs();
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      formTitle="Регистрация"
      submitButtonCaption="Зарегистрироваться"
      isSubmitButtonActive={
        emailInputState.isValid && passwordInputState.isValid && nameInputState.isValid
      }
      handleSubmit={handleSignUp}
      additionalAction={{
        text: 'или',
        buttonCaption: 'Войти',
        handler: openLoginPopup,
      }}
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
          onChange={onEmailInputChange}
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
          onChange={onPasswordInputChange}
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
          onChange={onNameInputChange}
        />
        <span className="form__input-error">{nameInputState.errorMessage}</span>
      </label>

    </PopupWithForm>
  );
}

export default PopupWithSignUpForm;
