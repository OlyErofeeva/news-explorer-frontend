import React from 'react';
import './AccentButton.css';

function AccentButton({
  caption,
  isSubmit = true,
  disabled = false,
  className = '',
  onClick,
}) {
  return (
    <button
      className={`accent-button ${className}`}
      type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {caption}
    </button>
  );
}

export default AccentButton;
