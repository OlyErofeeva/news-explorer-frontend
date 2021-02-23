import React from 'react';
import './NewsCardList.css';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  cards,
  isLoggedIn,
  isFoundNewsList,
  isSavedNewsList,
  onBookmarkButtonClick,
  onRemoveButtonClick,
  onOpenSignUpPopup,
}) {
  return (
    <ul className="news-card-list">
      {cards.map((item) => (
        <li key={item.link}>
          <NewsCard
            card={item}
            isFoundNewsCard={isFoundNewsList}
            isSavedNewsCard={isSavedNewsList}
            isLoggedIn={isLoggedIn}
            onBookmarkButtonClick={onBookmarkButtonClick}
            onRemoveButtonClick={onRemoveButtonClick}
            onOpenSignUpPopup={onOpenSignUpPopup}
          />
        </li>
      ))}
    </ul>
  );
}

export default NewsCardList;
