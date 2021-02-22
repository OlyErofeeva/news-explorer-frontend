import React, { useEffect } from 'react';
import './PopupWithForm.css';

import PopupWithForm from './PopupWithForm';

import useValidatedState from '../../utils/useValidatedState';

function PopupWithLoginForm({
  isOpen,
  onClose,
  onLogin,
  onOpenSignUpPopup,
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

  const resetInputs = () => {
    resetEmailInput('');
    resetPasswordInput('');
  };

  const handleLogin = () => {
    onLogin(emailInputState.value, passwordInputState.value);
  };

  useEffect(() => {
    if (!isOpen) {
      resetInputs();
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      formTitle="Вход"
      submitButtonCaption="Войти"
      additionalAction={{
        text: 'или',
        buttonCaption: 'Зарегистрироваться',
        handler: onOpenSignUpPopup,
      }}
      isOpen={isOpen}
      isSubmitButtonActive={
        emailInputState.isValid && passwordInputState.isValid
      }
      onSubmit={handleLogin}
      onClose={onClose}
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
          onChange={handleEmailInputChange}
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
          onChange={handlePasswordInputChange}
        />
        <span className="form__input-error">{passwordInputState.errorMessage}</span>
      </label>

    </PopupWithForm>

  );
}

export default PopupWithLoginForm;
