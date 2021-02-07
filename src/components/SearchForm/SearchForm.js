import React from 'react';
import './SearchForm.css';

import AccentButton from '../ui/AccentButton/AccentButton';

function SearchForm() {
  return (
    <form
      className="search-form"
      name="search"
      noValidate
    >
      <div className="search-form__wrapper">
        <input
          className="search-form__input"
          placeholder="Введите тему новости"
          type="text"
          required
        />
        <AccentButton
          caption="Искать"
          className="search-form__submit-button"
        />
      </div>
    </form>
  );
}

export default SearchForm;
