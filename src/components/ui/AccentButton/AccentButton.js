import React from 'react';
import './AccentButton.css';

function AccentButton({
  caption,
  isSubmit = true,
  isActive = true,
  className = '',
  onClick,
}) {
  return (
    <button
      className={`
        accent-button
        ${isActive ? 'accent-button_state_active' : 'accent-button_state_inactive'}
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

export default AccentButton;
