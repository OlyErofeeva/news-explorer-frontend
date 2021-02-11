import React from 'react';
import './SearchError.css';

import NotFoundIcon from '../svg/NotFoundIcon/NotFoundIcon';

function SearchError({ errTitle = '', errDescription = '' }) {
  return (
    <div className="search-error">
      <NotFoundIcon />
      {errTitle && (
        <p className="search-error__title">
          {errTitle}
        </p>
      )}
      {errDescription && (
        <p className="search-error__description">
          {errDescription}
        </p>
      )}
    </div>
  );
}

export default SearchError;
