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
  onOpenLoginPopup,
  onLogout,
}) {
  const [isHamburgerMenuShown, setIsHamburgerMenuShown] = useState(false);

  const handleOpenLoginPopup = () => {
    onOpenLoginPopup();
    setIsHamburgerMenuShown(false);
  };

  const handleLogout = () => {
    onLogout();
    setIsHamburgerMenuShown(false);
  };

  const handleHamburgerClick = () => {
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
        <div className="header__content">
          <LetterLogo isDarkTheme={isDarkTheme} className="header__logo" />

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
                  onClick={handleLogout}
                />
              )
              : (
                <SecondaryButton
                  className="header__button"
                  caption="Авторизоваться"
                  isDarkTheme={isDarkTheme}
                  onClick={handleOpenLoginPopup}
                />
              )}
          </div>

          <HamburgerMenuButton
            className="header__hamburger-button"
            isMenuExtended={isHamburgerMenuShown}
            isDarkTheme={isDarkTheme}
            onClick={handleHamburgerClick}
          />
        </div>
      </header>

      {isHamburgerMenuShown && (
        <Overlay />
      )}
    </>
  );
}

export default Header;
