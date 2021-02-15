import React, { useState } from 'react';
import './SearchForm.css';

import AccentButton from '../ui/AccentButton/AccentButton';

function SearchForm({ className, submitHandler }) {
  const [keyword, setKeyword] = useState('');

  const handleKeywordInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitHandler(keyword.trim().toLowerCase());
  };

  return (
    <form
      className={`search-form ${className}`}
      name="search"
      noValidate
      onSubmit={handleSubmit}
    >
      <h1 className="search-form__title">
        Что творится в
        <br />
        мире?
      </h1>

      <p className="search-form__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
      </p>

      <div className="search-form__wrapper">
        <input
          className="search-form__input"
          placeholder="Введите тему новости"
          type="text"
          required
          value={keyword}
          onChange={handleKeywordInputChange}
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
