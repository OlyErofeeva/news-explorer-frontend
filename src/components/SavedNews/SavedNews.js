import React, { useEffect, useState } from 'react';
import './SavedNews.css';

import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import bookmarksApiResponse from '../../db/bookmarksApiResponse';

function SavedNews({ isLoggedIn, handleLogout }) {
  const [bookmarks, setBookmarks] = useState([]);
  const getBookmarks = () => bookmarksApiResponse;

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        selectedNavLink="bookmarks"
        handleLogout={handleLogout}
      />
      <main>
        <SavedNewsHeader />
        <NewsCardList cards={bookmarks} isSavedNewsList />
      </main>
    </>
  );
}

export default SavedNews;
