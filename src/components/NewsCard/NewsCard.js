import React, { useState } from 'react';
import './NewsCard.css';

import BookmarkButton from '../ui/BookmarkButton/BookmarkButton';
import BookmarkButtonWithTooltip from '../ui/BookmarkButton/BookmarkButtonWithTooltip';
import RemoveButtonWithTooltip from '../ui/RemoveButton/RemoveButtonWithTooltip';
import KeywordTag from '../ui/KeywordTag/KeywordTag';

import truncateWithEllipsis from '../../utils/truncateWithEllipsis';
import { dateToDisplay } from '../../utils/dateUtils';

function NewsCard({
  card,
  isFoundNewsCard,
  isSavedNewsCard,
  isLoggedIn,
  onRemoveBookmark,
}) {
  const [isSelected, setIsSelected] = useState(false);

  const bookmarkClickHandler = () => {
    setIsSelected(!isSelected);
  };

  const removeClickHandler = () => {
    onRemoveBookmark(card._id);
  };

  return (
    <article className="news-card">
      <div className="news-card__image-wrapper">
        <img
          className="news-card__image"
          src={card.image}
          alt={card.title}
        />

        {(isFoundNewsCard && !isLoggedIn) && (
          <BookmarkButtonWithTooltip
            tooltipText="Войдите, чтобы сохранять статьи"
            className="news-card__button"
            isSelected={isSelected}
          />
        )}

        {(isFoundNewsCard && isLoggedIn) && (
          <BookmarkButton
            className="news-card__button"
            isSelected={isSelected}
            handleClick={bookmarkClickHandler}
          />
        )}

        {isSavedNewsCard && (
          <>
            <KeywordTag
              caption={card.keyword}
              className="news-card__keyword"
            />
            <RemoveButtonWithTooltip
              tooltipText="Убрать из сохранённых"
              className="news-card__button"
              isSelected={isSelected}
              handleClick={removeClickHandler}
            />
          </>
        )}
      </div>
      <a
        className="news-card__info"
        href={card.link}
        target="_blank"
        rel="noreferrer"
      >
        <p className="news-card__timestamp">{dateToDisplay(card.date)}</p>
        <h3 className="news-card__title">{truncateWithEllipsis(card.title, 60)}</h3>
        <p className="news-card__text">{truncateWithEllipsis(card.text, 190)}</p>
        <p className="news-card__source">{card.source}</p>
      </a>
    </article>
  );
}

export default NewsCard;
