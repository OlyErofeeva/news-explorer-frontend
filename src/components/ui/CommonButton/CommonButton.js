import React from 'react';
import './CommonButton.css';

function CommonButton({
  caption,
  isSubmit = false,
  isActive = true,
  className = '',
  onClick,
}) {
  return (
    <button
      className={`
        common-button
        ${isActive ? 'common-button_state_active' : 'common-button_state_inactive'}
        ${className}
      `}
      type={isSubmit ? 'submit' : 'button'}
      disabled={!isActive}
      onClick={onClick}
    >
      {caption}
    </button>
  );
}

export default CommonButton;
