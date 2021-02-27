import React, { useEffect, useMemo, useState } from 'react';
import './NewsCard.css';

import BookmarkButton from '../ui/BookmarkButton/BookmarkButton';
import BookmarkButtonWithTooltip from '../ui/BookmarkButton/BookmarkButtonWithTooltip';
import RemoveButtonWithTooltip from '../ui/RemoveButton/RemoveButtonWithTooltip';
import KeywordTag from '../ui/KeywordTag/KeywordTag';

import { MAX_CARD_TITLE_LENGTH, MAX_CARD_TEXT_LENGTH } from '../../configs';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import truncateWithEllipsis from '../../utils/truncateWithEllipsis';
import { dateToDisplay } from '../../utils/dateUtils';

function NewsCard({
  card,
  isFoundNewsCard,
  isSavedNewsCard,
  isLoggedIn,
  onBookmarkButtonClick,
  onRemoveButtonClick,
  onOpenSignUpPopup,
}) {
  const [isSelected, setIsSelected] = useState(false);

  const handleBookmarkButtonClick = () => {
    onBookmarkButtonClick(card);
  };

  const handleRemoveButtonClick = () => {
    onRemoveButtonClick(card._id);
  };

  const currentCard = useMemo(() => (
    <article className="news-card">
      <div className="news-card__image-wrapper">
        <img
          className="news-card__image"
          src={card.image}
          alt={`Обложка статьи "${card.title}"`}
        />

        {(isFoundNewsCard && !isLoggedIn) && (
          <BookmarkButtonWithTooltip
            tooltipText="Войдите, чтобы сохранять статьи"
            className="news-card__button"
            isSelected={isSelected}
            onClick={onOpenSignUpPopup}
          />
        )}

        {(isFoundNewsCard && isLoggedIn) && (
          <BookmarkButton
            className="news-card__button"
            isSelected={isSelected}
            onClick={handleBookmarkButtonClick}
          />
        )}

        {isSavedNewsCard && (
          <>
            <KeywordTag
              caption={capitalizeFirstLetter(card.keyword)}
              className="news-card__keyword"
            />
            <RemoveButtonWithTooltip
              tooltipText="Убрать из сохранённых"
              className="news-card__button"
              isSelected={isSelected}
              onClick={handleRemoveButtonClick}
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
        <h3 className="news-card__title">{truncateWithEllipsis(card.title, MAX_CARD_TITLE_LENGTH)}</h3>
        <p className="news-card__text">{truncateWithEllipsis(card.text, MAX_CARD_TEXT_LENGTH)}</p>
        <p className="news-card__source">{card.source}</p>
      </a>
    </article>
  ), [isSelected, card._id]);

  useEffect(() => {
    if (card._id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [card._id]);

  return currentCard;
}

export default NewsCard;
