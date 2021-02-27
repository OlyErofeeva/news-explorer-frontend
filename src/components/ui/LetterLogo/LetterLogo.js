import React from 'react';
import { Link } from 'react-router-dom';
import './LetterLogo.css';

function LetterLogo({
  isDarkTheme = false,
  className = '',
}) {
  return (
    <Link
      to="/"
      className={
        `letter-logo
        ${isDarkTheme ? 'letter-logo_theme_dark' : 'letter-logo_theme_light'}
        ${className}`
      }
    >
      NewsExplorer
    </Link>
  );
}

export default LetterLogo;
