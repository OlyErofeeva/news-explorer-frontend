import React from 'react';
import './NewsCardList.css';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  cards,
  isLoggedIn,
  isFoundNewsList,
  isSavedNewsList,
  onRemoveBookmark,
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
            onRemoveBookmark={onRemoveBookmark}
          />
        </li>
      ))}
    </ul>
  );
}

export default NewsCardList;
