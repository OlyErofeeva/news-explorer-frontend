import React, { useEffect, useState } from 'react';
import './PopupWithForm.css';

import PopupWithForm from './PopupWithForm';

import useValidatedState from '../../utils/useValidatedState';

function PopupWithLoginForm({
  isOpen,
  onClose,
  onLogin,
  onOpenSignUpPopup,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

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
    setIsLoading(true);
    setServerError('');
    onLogin(emailInputState.value, passwordInputState.value)
      .catch((err) => setServerError(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!isOpen) {
      resetInputs();
      setServerError('');
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      formTitle="Вход"
      submitButtonCaption="Войти"
      serverError={serverError}
      additionalAction={{
        text: 'или',
        buttonCaption: 'Зарегистрироваться',
        handler: onOpenSignUpPopup,
      }}
      isOpen={isOpen}
      isSubmitButtonActive={
        !isLoading && emailInputState.isValid && passwordInputState.isValid
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
          disabled={isLoading}
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
          disabled={isLoading}
          value={passwordInputState.value}
          onChange={handlePasswordInputChange}
        />
        <span className="form__input-error">{passwordInputState.errorMessage}</span>
      </label>

    </PopupWithForm>

  );
}

export default PopupWithLoginForm;
