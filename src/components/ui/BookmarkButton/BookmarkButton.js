import React, { useState } from 'react';
import './BookmarkButton.css';

import BookmarkIcon from '../../svg/BookmarkIcon/BookmarkIcon';

function BookmarkButton({
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
    <button
      className={`bookmark-button ${className}`}
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <BookmarkIcon isHovered={isHovered} isSelected={isSelected} />
    </button>
  );
}

export default BookmarkButton;
