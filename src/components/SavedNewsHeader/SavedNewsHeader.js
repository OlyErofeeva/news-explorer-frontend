import React, { useContext } from 'react';
import './SavedNewsHeader.css';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import aggregate from '../../utils/aggregate';
import { getKeywordsNumeralEnding, getSavedArticleSuffix } from '../../utils/wordInflectionUtils';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

function SavedNewsHeader({ bookmarks }) {
  const currentUser = useContext(CurrentUserContext);

  const getSavedArticlesNumber = () => {
    if (bookmarks && bookmarks.length > 0) {
      return bookmarks.length;
    }
    return 'пока нет';
  };

  const renderKeywordInfo = () => {
    const keywords = bookmarks.map((bookmark) => capitalizeFirstLetter(bookmark.keyword));
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
              {`${sortedKeywords.length - 2}${getKeywordsNumeralEnding(sortedKeywords.length - 2)} другим`}
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
          {`${currentUser.name}, у вас ${getSavedArticlesNumber()}`}
          <br />
          {getSavedArticleSuffix(bookmarks.length)}
        </h2>
        {(bookmarks && bookmarks.length > 0) && renderKeywordInfo()}
      </div>
    </section>

  );
}

export default SavedNewsHeader;
