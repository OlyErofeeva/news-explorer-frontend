import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationLink.css';

function NavigationLink({
  className = '',
  text = '',
  link = '/',
  isSelected = false,
  isDarkTheme = false,
}) {
  return (
    <Link
      to={link}
      className={`
        navigation-link
        ${isDarkTheme ? 'navigation-link_theme_dark' : 'navigation-link_theme_light'}
        ${isSelected ? 'navigation-link_selected' : ''}
        ${className}
      `}
    >
      {text}
    </Link>
  );
}

export default NavigationLink;
