import React from 'react';
import './NavigationLink.css';

function NavigationLink({
  className = '',
  text = '',
  link = '/',
  isSelected = false,
  isDarkTheme = false,
}) {
  return (
    <a
      className={`
        navigation-link
        ${isDarkTheme ? 'navigation-link_theme_dark' : 'navigation-link_theme_light'}
        ${isSelected ? 'navigation-link_selected' : ''}
        ${className}
      `}
      href={link}
    >
      {text}
    </a>
  );
}

export default NavigationLink;
