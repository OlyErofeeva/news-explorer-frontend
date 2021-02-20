import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithLoginForm from '../PopupWithForm/PopupWithLoginForm';
import PopupWithSignUpForm from '../PopupWithForm/PopupWithSignUpForm';
import PopupSignedUp from '../PopupSignedUp/PopupSignedUp';

import newsApi from '../../utils/NewsApi';
import { daysToMsec } from '../../utils/dateUtils';
import { SEARCH_INTERVAL_DAYS } from '../../configs';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSignUpMessagePopupOpen, setIsSignUpMessagePopupOpen] = useState(false);

  const closeAllPopups = () => {
    setIsSignUpPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsSignUpMessagePopupOpen(false);
  };

  const openSignUpMessagePopup = () => {
    closeAllPopups();
    setIsSignUpMessagePopupOpen(true);
  };

  const openLoginPopup = () => {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  };

  const openSignUpPopup = () => {
    closeAllPopups();
    setIsSignUpPopupOpen(true);
  };

  const handleLogin = () => {
    localStorage.setItem('token', true);
    setIsLoggedIn(true);
    closeAllPopups();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const searchNews = (keyword) => {
    const dateFrom = new Date(Date.now() - daysToMsec(SEARCH_INTERVAL_DAYS))
      .toISOString()
      .substring(0, 10);

    const dateTo = new Date(Date.now())
      .toISOString()
      .substring(0, 10);

    return newsApi
      .getArticles(keyword, dateFrom, dateTo)
      .then((response) => {
        const articles = response.articles.map((article) => ({
          keyword,
          title: article.title,
          text: article.description,
          date: article.publishedAt,
          source: article.source.name,
          link: article.url,
          image: article.urlToImage,
        }));

        localStorage.setItem('cachedNews', JSON.stringify(articles));
        return articles;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }

    const closePopupOnEsc = (event) => {
      if (event.key === 'Escape') {
        closeAllPopups();
      }
    };
    document.addEventListener('keydown', closePopupOnEsc);
    return () => document.removeEventListener('keydown', closePopupOnEsc);
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/saved-news">
          <SavedNews
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
          />
        </Route>
        <Route path="/">
          <Main
            isLoggedIn={isLoggedIn}
            openLoginPopup={openLoginPopup}
            handleLogout={handleLogout}
            searchNews={searchNews}
          />
        </Route>
      </Switch>
      <Footer />

      <PopupWithLoginForm
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        openSignUpPopup={openSignUpPopup}
        handleLogin={handleLogin}
      />

      <PopupWithSignUpForm
        isOpen={isSignUpPopupOpen}
        onClose={closeAllPopups}
        openLoginPopup={openLoginPopup}
        openSignUpMessagePopup={openSignUpMessagePopup}
      />

      <PopupSignedUp
        isOpen={isSignUpMessagePopupOpen}
        onClose={closeAllPopups}
        openPopupWithLogin={openLoginPopup}
      />
    </div>
  );
}

export default App;
