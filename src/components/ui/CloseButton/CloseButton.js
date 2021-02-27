import React from 'react';
import './CloseButton.css';

import CloseIcon from '../../svg/CloseIcon/CloseIcon';

function CloseButton({
  className = '',
  isDarkTheme,
  onClick,
}) {
  return (
    <button
      className={`close-button ${className}`}
      type="button"
      onClick={onClick}
    >
      <CloseIcon isDarkTheme={isDarkTheme} />
    </button>
  );
}

export default CloseButton;
