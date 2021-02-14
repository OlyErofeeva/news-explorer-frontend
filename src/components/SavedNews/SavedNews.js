import React, { useEffect, useState } from 'react';
import './SavedNews.css';

import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import bookmarksApiResponse from '../../db/bookmarksApiResponse';

function SavedNews({ isLoggedIn, handleLogout }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBookmarks = () => bookmarksApiResponse;

  useEffect(() => {
    setIsLoading(true);
    setBookmarks(getBookmarks());
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        selectedNavLink="bookmarks"
        handleLogout={handleLogout}
      />
      <main className="saved-news-wrapper">
        <SavedNewsHeader />
        <section className="saved-news">
          <div className="saved-news__content">
            {isLoading
              ? (<Preloader message="Загрузка сохранённых статей..." />)
              : (
                <NewsCardList
                  cards={bookmarks}
                  isLoggedIn
                  isSavedNewsList
                />
              )}
          </div>
        </section>
      </main>
    </>
  );
}

export default SavedNews;
