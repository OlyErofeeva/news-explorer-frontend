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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        className={`bookmark-icon ${resolveClassName()}`}
        d="M11.3822 15.7137L6 19.9425V4L18 4V19.9425L12.6178 15.7137L12 15.2283L11.3822 15.7137Z"
      />
    </svg>
  );
}

export default BookmarkIcon;
