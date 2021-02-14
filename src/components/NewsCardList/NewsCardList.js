import React from 'react';
import './NewsCardList.css';

import NewsCard from '../NewsCard/NewsCard';

// TODO: добавить пейджирование для результатов news api

function NewsCardList({
  cards,
  isLoggedIn,
  isFoundNewsList,
  isSavedNewsList,
}) {
  return (
    <ul className="news-card-list">
      {cards.map((item) => (
        <li key={item.text}>
          <NewsCard
            card={item}
            isFoundNewsCard={isFoundNewsList}
            isSavedNewsCard={isSavedNewsList}
            isLoggedIn={isLoggedIn}
          />
        </li>
      ))}
    </ul>
  );
}

export default NewsCardList;
