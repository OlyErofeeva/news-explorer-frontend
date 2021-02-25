import React, { useEffect, useState } from 'react';
import './SavedNews.css';

import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({
  isLoggedIn,
  onLogout,
  getSavedNews,
  onRemoveBookmark,
}) {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveBookmark = (bookmarkId) => {
    onRemoveBookmark(bookmarkId)
      .then(() => {
        const newBookmarks = bookmarks.filter((item) => item._id !== bookmarkId);
        setBookmarks(newBookmarks);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    getSavedNews()
      .then((response) => {
        setBookmarks(response);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        selectedNavLink="bookmarks"
        onLogout={onLogout}
      />
      <main className="saved-news-wrapper">
        {!isLoading && (
          <SavedNewsHeader bookmarks={bookmarks} />
        )}
        <section className="saved-news">
          <div className="saved-news__content">
            {isLoading
              ? (<Preloader message="Загрузка сохранённых статей..." />)
              : (
                <NewsCardList
                  cards={bookmarks}
                  isLoggedIn
                  isSavedNewsList
                  onRemoveButtonClick={handleRemoveBookmark}
                />
              )}
          </div>
        </section>
      </main>
    </>
  );
}

export default SavedNews;
