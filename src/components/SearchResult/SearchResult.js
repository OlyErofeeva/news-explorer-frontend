import React from 'react';
import './SearchResult.css';

import CommonButton from '../ui/CommonButton/CommonButton';
import SearchError from '../SearchError/SearchError';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResult({
  cards,
  isLoading,
  isLoggedIn,
}) {
  return (
    <section className="search-result">
      <div className="search-result__content">
        {isLoading
          ? (<Preloader message="Идет поиск новостей..." />)
          : (
            <>
              {(cards.length === 0) && (
                <SearchError
                  errTitle="Ничего не найдено"
                  errDescription="К сожалению по вашему запросу ничего не найдено"
                />
              )}

              {(cards.length > 0) && (
                <>
                  <h2 className="search-result__title">Результаты поиска</h2>
                  <NewsCardList
                    cards={cards}
                    isLoggedIn={isLoggedIn}
                    isFoundNewsList
                  />
                  <CommonButton
                    caption="Показать ещё"
                    className="search-result__show-more-button"
                  />
                </>
              )}
            </>
          )}
      </div>
    </section>
  );
}

export default SearchResult;
