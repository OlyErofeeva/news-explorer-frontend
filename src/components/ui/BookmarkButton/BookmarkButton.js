import React from 'react';
import './BookmarkButton.css';

function BookmarkButton({ bookmarkState }) {
  if (bookmarkState === 'hovered') { // TODO: refactor. maybe switch svg/path only
    return (
      <button className="bookmark-button" type="button">
        <svg width="14" height="19" viewBox="0 0 14 19" fill="none">
          <path
            stroke="#1A1B22"
            strokeWidth="2"
            d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z"
          />
        </svg>
      </button>
    );
  }

  if (bookmarkState === 'marked') {
    return (
      <button className="bookmark-button" type="button">
        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1C0 0.447715 0.447715 0 1 0H13C13.5523 0 14 0.447715 14 1V19L7 13.5L0 19V1Z" fill="#2F71E5" />
        </svg>
      </button>
    );
  }

  return (
    <button className="bookmark-button" type="button">
      <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z" stroke="#B6BCBF" strokeWidth="2" />
      </svg>
    </button>
  );
}

export default BookmarkButton;
