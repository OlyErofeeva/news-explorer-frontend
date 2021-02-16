import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <div className="saved-news-header__content">
        <h1 className="saved-news-header__title">Сохранённые статьи</h1>
        <h2 className="saved-news-header__subtitle">
          Грета, у вас 5
          <br />
          сохранённых статей
        </h2>
        <p className="saved-news-header__keywords">
          По ключевым словам:
          <span className="saved-news-header__keywords_accent"> Природа</span>
          ,
          <span className="saved-news-header__keywords_accent"> Тайга </span>
          и
          <span className="saved-news-header__keywords_accent"> 2-м другим</span>
        </p>
      </div>
    </section>

  );
}

export default SavedNewsHeader;
