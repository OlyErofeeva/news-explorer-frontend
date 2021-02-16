import React from 'react';
import './Navigation.css';

import NavigationLink from '../ui/NavigationLink/NavigationLink';

function Navigation({
  links = [],
  selectedNavLink = 'home',
  isDarkTheme = false,
}) {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        {links.map((item) => (
          <li key={item.id}>
            <NavigationLink
              className="navigation__link"
              text={item.text}
              link={item.link}
              isSelected={item.id === selectedNavLink}
              isDarkTheme={isDarkTheme}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
