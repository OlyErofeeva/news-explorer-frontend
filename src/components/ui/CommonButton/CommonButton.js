import React from 'react';
import './CommonButton.css';
/* TODO: enable "react/prop-types" for eslint */

function CommonButton({
  caption,
  isActive = true,
  className,
  handleClick,
}) {
  return (
    <button
      className={`
        common-button
        ${isActive ? 'common-button_state_active' : 'common-button_state_inactive'}
        ${className}
      `}
      type="button"
      onClick={handleClick}
    >
      {caption}
    </button>
  );
}

export default CommonButton;
