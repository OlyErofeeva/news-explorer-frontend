import React from 'react';
import './ModalWindow.css';

import CloseButton from '../ui/CloseButton/CloseButton';

function ModalWindow({
  isOpen = false,
  onClose,
  title,
  children,
  className = '',
  additionalAction,
}) {
  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''} ${className}`}>
      <div className="modal__content">
        <CloseButton
          className="modal__close-button"
          handleClick={onClose}
          isDarkTheme
        />
        <h2 className="modal__title">{title}</h2>
        {children}
        {additionalAction && (
          <div className="modal__additional-action">
            <span className="modal__additional-action-text">
              {additionalAction.text}
            </span>
            <button
              className="modal__additional-action-button"
              type="button"
              onClick={additionalAction.handler}
            >
              {additionalAction.buttonCaption}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalWindow;