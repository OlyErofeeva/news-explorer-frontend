import React from 'react';
import './SearchResult.css';

import CommonButton from '../ui/CommonButton/CommonButton';
import SearchError from '../SearchError/SearchError';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResult({
  cards,
  isKeywordEmpty,
  isLoading,
  isSearchFailed,
  isLoggedIn,
  isAllNewsShown,
  onShowMoreClick,
  onBookmarkButtonClick,
  onOpenSignUpPopup,
}) {
  const renderSearchResult = () => {
    if (isLoading) {
      return (<Preloader message="Идет поиск новостей..." />);
    }

    switch (true) {
      case (isSearchFailed):
        return (
          <SearchError
            errTitle="Во время запроса произошла ошибка"
            errDescription="Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          />
        );

      case (isKeywordEmpty && cards.length === 0):
        return (
          <SearchError
            errTitle="Задан пустой поисковой запрос"
            errDescription="Нужно ввести ключевое слово"
          />
        );

      case (!isKeywordEmpty && cards.length === 0):
        return (
          <SearchError
            errTitle="Ничего не найдено"
            errDescription="К сожалению по вашему запросу ничего не найдено"
          />
        );

      case (cards.length > 0):
        return (
          <>
            <h2 className="search-result__title">Результаты поиска</h2>
            <NewsCardList
              cards={cards}
              isLoggedIn={isLoggedIn}
              isFoundNewsList
              onBookmarkButtonClick={onBookmarkButtonClick}
              onOpenSignUpPopup={onOpenSignUpPopup}
            />
            {!isAllNewsShown && (
              <CommonButton
                caption="Показать ещё"
                className="search-result__show-more-button"
                onClick={onShowMoreClick}
              />
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="search-result">
      <div className="search-result__content">
        {renderSearchResult()}
      </div>
    </section>
  );
}

export default SearchResult;
