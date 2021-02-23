import React, { useState } from 'react';
import './Main.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import About from '../About/About';

import { INITIAL_PAGE_SIZE, SHOW_MORE_PAGE_SIZE } from '../../configs';

function Main({
  isLoggedIn,
  onOpenLoginPopup,
  onOpenSignUpPopup,
  onLogout,
  searchNews,
  onCreateBookmark,
  onRemoveBookmark,
}) {
  const [shownNews, setShownNews] = useState([]);
  const [isSearchStarted, setIsSearchStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isKeywordEmpty, setIsKeyWordEmpty] = useState(true);

  const isAllNewsShown = localStorage.getItem('cachedNews') && (shownNews.length === JSON.parse(localStorage.getItem('cachedNews')).length);

  const handleSearchFormSubmit = (keyword) => {
    setIsSearchStarted(true);
    setShownNews([]);

    if (keyword === '') {
      setIsKeyWordEmpty(true);
    } else {
      setIsKeyWordEmpty(false);
      setIsLoading(true);
      searchNews(keyword)
        .then((articles) => {
          setShownNews(articles.slice(0, INITIAL_PAGE_SIZE));
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleShowMoreClick = () => {
    const cachedArticles = JSON.parse(localStorage.getItem('cachedNews'));
    setShownNews(cachedArticles.slice(0, shownNews.length + SHOW_MORE_PAGE_SIZE));
  };

  const handleBookmarkButtonClick = (article) => {
    const cachedArticles = JSON.parse(localStorage.getItem('cachedNews'));
    if (!article._id) {
      onCreateBookmark(article)
        .then((response) => {
          const updatedCachedArticles = cachedArticles.map((item) => {
            if (item.link === article.link) {
              return { ...item, _id: response._id };
            }
            return item;
          });
          localStorage.setItem('cachedNews', JSON.stringify(updatedCachedArticles));
          setShownNews(updatedCachedArticles.slice(0, shownNews.length));
        })
        .catch((err) => console.log(err));
    } else {
      onRemoveBookmark(article._id)
        .then(() => {
          const updatedCachedArticles = cachedArticles.map((item) => {
            if (item.link === article.link) {
              return { ...item, _id: '' };
            }
            return item;
          });
          localStorage.setItem('cachedNews', JSON.stringify(updatedCachedArticles));
          setShownNews(updatedCachedArticles.slice(0, shownNews.length));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <main className="main">
      <div className="main__container-with-background">
        <Header
          selectedNavLink="home"
          isLoggedIn={isLoggedIn}
          isDarkTheme
          onOpenLoginPopup={onOpenLoginPopup}
          onLogout={onLogout}
        />
        <SearchForm
          className="main__search-form"
          onSubmit={handleSearchFormSubmit}
        />
      </div>
      {isSearchStarted && (
        <SearchResult
          cards={shownNews}
          isKeywordEmpty={isKeywordEmpty}
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          isAllNewsShown={isAllNewsShown}
          onShowMoreClick={handleShowMoreClick}
          onOpenSignUpPopup={onOpenSignUpPopup}
          onBookmarkButtonClick={handleBookmarkButtonClick}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
