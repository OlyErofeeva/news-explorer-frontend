import React, { useState } from 'react';
import './BookmarkButton.css';

import BookmarkIcon from '../../svg/BookmarkIcon/BookmarkIcon';
import ButtonTooltip from '../ButtonTooltip/ButtonTooltip';

function BookmarkButtonWithTooltip({
  tooltipText,
  className = '',
  isSelected = false,
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
    <div className={`bookmark-button-wrapper ${className}`}>
      {isHovered && (
        <ButtonTooltip
          className="bookmark-button-tooltip"
          caption={tooltipText}
        />
      )}
      <button
        className="bookmark-button"
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <BookmarkIcon isHovered={isHovered} isSelected={isSelected} />
      </button>
    </div>
  );
}

export default BookmarkButtonWithTooltip;
