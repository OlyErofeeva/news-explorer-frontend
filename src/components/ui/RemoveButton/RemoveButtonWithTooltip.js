import React, { useState } from 'react';
import './RemoveButton.css';

import RemoveIcon from '../../svg/RemoveIcon/RemoveIcon';
import ButtonTooltip from '../ButtonTooltip/ButtonTooltip';

function RemoveButtonWithTooltip({
  tooltipText,
  className = '',
  handleClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`remove-button-wrapper ${className}`}>
      {isHovered && (
        <ButtonTooltip
          className="remove-button-tooltip"
          caption={tooltipText}
        />
      )}
      <button
        className="remove-button"
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <RemoveIcon isHovered={isHovered} />
      </button>
    </div>
  );
}

export default RemoveButtonWithTooltip;
