import React from 'react';
import './Preloader.css';

import LoadingIcon from '../svg/LoadingIcon/LoadingIcon';

function Preloader({ message = '' }) {
  return (
    <div className="preloader">
      <LoadingIcon />
      <p className="preloader__message">{message}</p>
    </div>
  );
}

export default Preloader;
