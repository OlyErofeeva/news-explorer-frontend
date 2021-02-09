import React from 'react';
import './BookmarkIcon.css';

function BookmarkIcon({
  isSelected = false,
  isHovered = false,
}) {
  const resolveClassName = () => {
    switch (true) {
      case (!isSelected && !isHovered):
        return 'bookmark-icon_state_unselected';
      case (!isSelected && isHovered):
        return 'bookmark-icon_state_unselected-hovered';
      case (isSelected && !isHovered):
        return 'bookmark-icon_state_selected';
      case (isSelected && isHovered):
        return 'bookmark-icon_state_selected-hovered';
      default:
        return 'bookmark-icon_state_unselected';
    }
  };

  return (
    <svg
      width="14"
      height="19"
      viewBox="0 0 14 19"
      fill="none"
    >
      <path
        className={`bookmark-icon ${resolveClassName()}`}
        d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z"
      />
    </svg>
  );
}

export default BookmarkIcon;
