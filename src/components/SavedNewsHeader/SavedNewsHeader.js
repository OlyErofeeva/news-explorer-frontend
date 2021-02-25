import React, { useContext } from 'react';
import './SavedNewsHeader.css';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import aggregate from '../../utils/aggregate';

function SavedNewsHeader({ bookmarks }) {
  const currentUser = useContext(CurrentUserContext);
  const renderSavedArticlesNumber = () => {
    if (bookmarks && bookmarks.length > 0) {
      return bookmarks.length;
    }
    return 'пока нет';
  };

  const renderKeywordInfo = () => {
    const keywords = bookmarks.map((bookmark) => bookmark.keyword);
    const sortedKeywords = aggregate(keywords);

    switch (true) {
      case (sortedKeywords.length === 1):
        return (
          <p className="saved-news-header__keywords">
            {'По ключевому слову: '}
            <span className="saved-news-header__keywords_accent">{sortedKeywords[0].key}</span>
          </p>
        );

      case (sortedKeywords.length === 2):
        return (
          <p className="saved-news-header__keywords">
            {'По ключевым словам: '}
            <span className="saved-news-header__keywords_accent">{sortedKeywords[0].key}</span>
            {' и '}
            <span className="saved-news-header__keywords_accent">{sortedKeywords[1].key}</span>
          </p>
        );

      case (sortedKeywords.length === 3):
        return (
          <p className="saved-news-header__keywords">
            {'По ключевым словам: '}
            <span className="saved-news-header__keywords_accent">{sortedKeywords[0].key}</span>
            {', '}
            <span className="saved-news-header__keywords_accent">{sortedKeywords[1].key}</span>
            {' и '}
            <span className="saved-news-header__keywords_accent">{sortedKeywords[2].key}</span>
          </p>
        );

      case (sortedKeywords.length > 3):
        return (
          <p className="saved-news-header__keywords">
            {'По ключевым словам: '}
            <span className="saved-news-header__keywords_accent">{sortedKeywords[0].key}</span>
            {', '}
            <span className="saved-news-header__keywords_accent">{sortedKeywords[1].key}</span>
            {' и '}
            <span className="saved-news-header__keywords_accent">
              {`${sortedKeywords.length - 2} другим`}
            </span>
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__content">
        <h1 className="saved-news-header__title">Сохранённые статьи</h1>
        <h2 className="saved-news-header__subtitle">
          {`${currentUser.name}, у вас ${renderSavedArticlesNumber()}`}
          <br />
          сохранённых статей
        </h2>
        {(bookmarks && bookmarks.length > 0) && renderKeywordInfo()}
      </div>
    </section>

  );
}

export default SavedNewsHeader;
