import React, { useState } from 'react';
import './Header.css';

import LetterLogo from '../ui/LetterLogo/LetterLogo';
import Navigation from '../Navigation/Navigation';
import SecondaryButton from '../ui/SecondaryButton/SecondaryButton';
import { navigationLinks, authNavigationLinks } from '../../configs/links';
import LogoutIcon from '../svg/LogoutIcon/LogoutIcon';
import HamburgerMenuButton from '../ui/HamburgerMenuButton/HamburgerMenuButton';
import Overlay from '../ui/Overlay/Overlay';

function Header({
  isLoggedIn = false,
  isDarkTheme = false,
  selectedNavLink,
}) {
  const [isHamburgerMenuShown, setIsHamburgerMenuShown] = useState(false);

  const hamburgerClickHandler = () => {
    setIsHamburgerMenuShown(!isHamburgerMenuShown);
  };

  const resolveHeaderClassName = () => {
    switch (true) {
      case (isDarkTheme && isHamburgerMenuShown):
        return 'header_theme_dark header_extended-dark';
      case (isDarkTheme && !isHamburgerMenuShown):
        return 'header_theme_dark';
      case (!isDarkTheme && isHamburgerMenuShown):
        return 'header_theme_light header_extended-light';
      case (!isDarkTheme && !isHamburgerMenuShown):
        return 'header_theme_light';
      default:
        return '';
    }
  };

  return (
    <>
      <header className={`header ${resolveHeaderClassName()}`}>
        <LetterLogo isDarkTheme={isDarkTheme} />

        <div
          className={`
            header__control-wrapper
            ${isDarkTheme ? 'header__control-wrapper_theme_dark' : 'header__control-wrapper_theme_light'}
            ${isHamburgerMenuShown ? '' : 'header__control-wrapper_hidden'}
          `}
        >
          <Navigation
            links={isLoggedIn ? authNavigationLinks : navigationLinks}
            isDarkTheme={isDarkTheme}
            selectedNavLink={selectedNavLink}
          />

          {isLoggedIn
            ? (
              <SecondaryButton
                className="header__button"
                caption="Грета"
                Icon={LogoutIcon}
                isDarkTheme={isDarkTheme}
              />
            )
            : (
              <SecondaryButton
                className="header__button"
                caption="Авторизоваться"
                isDarkTheme={isDarkTheme}
              />
            )}
        </div>

        <HamburgerMenuButton
          className="header__hamburger-button"
          handleClick={hamburgerClickHandler}
          isMenuExtended={isHamburgerMenuShown}
          isDarkTheme={isDarkTheme}
        />
      </header>

      {isHamburgerMenuShown && (
        <Overlay />
      )}
    </>
  );
}

export default Header;
