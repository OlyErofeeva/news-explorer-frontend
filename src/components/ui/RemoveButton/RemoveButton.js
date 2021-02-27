import React, { useState } from 'react';
import './RemoveButton.css';

import RemoveIcon from '../../svg/RemoveIcon/RemoveIcon';

function RemoveButton({
  className = '',
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`remove-button ${className}`}
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <RemoveIcon isHovered={isHovered} />
    </button>
  );
}

export default RemoveButton;
