import React from 'react';
import './SecondaryButton.css';

function SecondaryButton({
  caption,
  isSubmit = false,
  isDarkTheme = false,
  className = '',
  handleClick,
}) {
  return (
    <button
      className={`
        secondary-button
        ${isDarkTheme ? 'secondary-button_theme_dark' : 'secondary-button_theme_light'}
        ${className}
      `}
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick}
    >
      {caption}
    </button>
  );
}

export default SecondaryButton;
