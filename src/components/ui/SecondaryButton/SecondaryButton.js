import React from 'react';
import './SecondaryButton.css';

function SecondaryButton({
  caption,
  isSubmit = false,
  isDarkTheme = false,
  className = '',
  onClick,
  Icon,
}) {
  return (
    <button
      className={`
        secondary-button
        ${isDarkTheme ? 'secondary-button_theme_dark' : 'secondary-button_theme_light'}
        ${className}
      `}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {caption}
      { Icon && <Icon className="secondary-button__icon" isDarkTheme={isDarkTheme} />}
    </button>
  );
}

export default SecondaryButton;
