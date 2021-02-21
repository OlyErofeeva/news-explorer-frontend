import React, { useEffect, useState } from 'react';
import './SavedNews.css';

import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import bookmarksApiResponse from '../../db/bookmarksApiResponse';

function SavedNews({ isLoggedIn, onLogout }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBookmarks = () => bookmarksApiResponse;

  const handleRemoveBookmark = (bookmarkId) => {
    const newBookmarks = bookmarks.filter((item) => item._id !== bookmarkId);
    setBookmarks(newBookmarks);
  };

  useEffect(() => {
    setIsLoading(true);
    setBookmarks(getBookmarks());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        selectedNavLink="bookmarks"
        onLogout={onLogout}
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
                  onRemoveBookmark={handleRemoveBookmark}
                />
              )}
          </div>
        </section>
      </main>
    </>
  );
}

export default SavedNews;
