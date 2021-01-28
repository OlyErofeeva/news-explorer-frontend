import React from 'react';
import './SubmitButton.css';

function SubmitButton({
  caption,
  isActive = true,
  className,
  handleClick,
}) {
  return (
    <button
      className={`
        submit-button
        ${isActive ? 'submit-button_state_active' : 'submit-button_state_inactive'}
        ${className}
      `}
      type="submit"
      onClick={handleClick}
    >
      {caption}
    </button>
  );
}

export default SubmitButton;
