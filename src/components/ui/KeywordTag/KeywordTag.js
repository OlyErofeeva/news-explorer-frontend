import React from 'react';
import './KeywordTag.css';

function KeywordTag({
  caption,
  className = '',
}) {
  return (
    <div
      className={`keyword-tag ${className}`}
    >
      {caption}
    </div>
  );
}

export default KeywordTag;
