import React, { useState } from 'react';
import './Main.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import newsApiResponse from '../../db/newsApiResponse';

function Main({ isLoggedIn, openLoginPopup, handleLogout }) {
  const [foundNews, setFoundNews] = useState([]);
  const [isSearchStarted, setIsSearchStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchFormSubmit = (keyword = 'Природа') => {
    setIsSearchStarted(true);
    setIsLoading(true);
    const result = newsApiResponse.articles.map((article) => ({
      keyword,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    }));
    setFoundNews(result);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <main className="main">
      <div className="main__container-with-background">
        <Header
          isLoggedIn={isLoggedIn}
          selectedNavLink="home"
          isDarkTheme
          openLoginPopup={openLoginPopup}
          handleLogout={handleLogout}
        />
        <SearchForm className="main__search-form" submitHandler={handleSearchFormSubmit} />
      </div>
      {isSearchStarted && (
        <NewsCardList
          title="Результаты поиска"
          cards={foundNews}
          isFoundNewsList
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
