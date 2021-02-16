import React from 'react';

function HamburgerMenuIcon({ isDarkTheme = false }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        fill={`${isDarkTheme ? '#fff' : '#1a1b22'}`}
        x="4"
        y="8"
        width="16"
        height="2"
      />
      <rect
        fill={`${isDarkTheme ? '#fff' : '#1a1b22'}`}
        x="4"
        y="14"
        width="16"
        height="2"
      />
    </svg>
  );
}

export default HamburgerMenuIcon;
