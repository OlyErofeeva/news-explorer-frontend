import React from 'react';
import './HamburgerMenuButton.css';

import HamburgerMenuIcon from '../../svg/HamburgerMenuIcon/HamburgerMenuIcon';
import HamburgerMenuCloseIcon from '../../svg/HamburgerMenuCloseIcon/HamburgerMenuCloseIcon';

function HamburgerMenuButton({
  className = '',
  isDarkTheme,
  isMenuExtended = false,
  onClick,
}) {
  return (
    <button
      className={`hamburger-button ${className}`}
      type="button"
      onClick={onClick}
    >
      {isMenuExtended
        ? <HamburgerMenuCloseIcon isDarkTheme={isDarkTheme} />
        : <HamburgerMenuIcon isDarkTheme={isDarkTheme} />}
    </button>
  );
}

export default HamburgerMenuButton;
