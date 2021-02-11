import React from 'react';
import './HamburgerMenuButton.css';

import HamburgerMenuIcon from '../../svg/HamburgerMenuIcon/HamburgerMenuIcon';
import HamburgerMenuCloseIcon from '../../svg/HamburgerMenuCloseIcon/HamburgerMenuCloseIcon';

function HamburgerMenuButton({
  className = '',
  isDarkTheme,
  isMenuExtended,
  handleClick,
}) {
  return (
    <button
      className={`hamburger-button ${className}`}
      type="button"
      onClick={handleClick}
    >
      {isMenuExtended
        ? <HamburgerMenuIcon isDarkTheme={isDarkTheme} />
        : <HamburgerMenuCloseIcon isDarkTheme={isDarkTheme} />}
    </button>
  );
}

export default HamburgerMenuButton;
