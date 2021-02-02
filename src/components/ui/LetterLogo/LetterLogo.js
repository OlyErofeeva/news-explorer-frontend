import React from 'react';
import './LetterLogo.css';

function LetterLogo({
  isDarkTheme = false,
  className = '',
}) {
  return (
    <a
      href="/"
      className={
        `letter-logo
        ${isDarkTheme ? 'letter-logo_theme_dark' : 'letter-logo_theme_light'}
        ${className}`
      }
    >
      NewsExplorer
    </a>
  );
}

export default LetterLogo;
