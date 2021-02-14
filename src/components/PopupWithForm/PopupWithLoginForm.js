import React, { useEffect } from 'react';
import './PopupWithForm.css';

import PopupWithForm from './PopupWithForm';

import useValidatedState from '../../utils/useValidatedState';

function PopupWithLoginForm({
  isOpen,
  onClose,
  openSignUpPopup,
  handleLogin,
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

  const resetInputs = () => {
    resetEmailInput('');
    resetPasswordInput('');
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
      formTitle="Вход"
      submitButtonCaption="Войти"
      isSubmitButtonActive={
        emailInputState.isValid && passwordInputState.isValid
      }
      handleSubmit={handleLogin}
      additionalAction={{
        text: 'или',
        buttonCaption: 'Зарегистрироваться',
        handler: openSignUpPopup,
      }}
    >
      <label className="form__input-label" htmlFor="login-email">
        Email
        <input
          className="form__input"
          id="login-email"
          type="email"
          name="email"
          placeholder="Введите почту"
          required
          value={emailInputState.value}
          onChange={onEmailInputChange}
        />
        <span className="form__input-error">{emailInputState.errorMessage}</span>
      </label>

      <label className="form__input-label" htmlFor="login-password">
        Пароль
        <input
          className="form__input"
          id="login-password"
          type="password"
          name="password"
          placeholder="Введите пароль"
          required
          value={passwordInputState.value}
          onChange={onPasswordInputChange}
        />
        <span className="form__input-error">{passwordInputState.errorMessage}</span>
      </label>

    </PopupWithForm>

  );
}

export default PopupWithLoginForm;
