import React from 'react';
import './ButtonTooltip.css';

function ButtonTooltip({
  caption,
  className = '',
}) {
  return (
    <div
      className={`tooltip ${className}`}
    >
      {caption}
    </div>
  );
}

export default ButtonTooltip;
