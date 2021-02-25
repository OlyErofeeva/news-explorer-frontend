import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithLoginForm from '../PopupWithForm/PopupWithLoginForm';
import PopupWithSignUpForm from '../PopupWithForm/PopupWithSignUpForm';
import PopupSignedUp from '../PopupSignedUp/PopupSignedUp';

import newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';
import { daysToMsec } from '../../utils/dateUtils';
import { SEARCH_INTERVAL_DAYS } from '../../configs';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    email: '',
    name: '',
  });
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

  const handleSignUp = (email, password, name) => {
    mainApi
      .signUp(email, password, name)
      .then(() => {
        openSignUpMessagePopup();
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (email, password) => {
    mainApi
      .signIn(email, password)
      .then((response) => {
        if (response.token) {
          closeAllPopups();
          localStorage.setItem('token', response.token);
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cachedNews');
    setIsLoggedIn(false);
    setCurrentUser({
      _id: '',
      email: '',
      name: '',
    });
    history.push('/');
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

  const getSavedNews = () => {
    const token = localStorage.getItem('token');
    return mainApi
      .getBookmarkedArticles(token);
  };

  const createBookmark = (article) => {
    const token = localStorage.getItem('token');
    return mainApi
      .createArticleBookmark(token, article);
  };

  const removeBookmark = (articleId) => {
    const token = localStorage.getItem('token');
    return mainApi
      .removeArticleBookmark(token, articleId);
  };

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem('token');
      mainApi
        .getCurrentUserInfo(token)
        .then((response) => {
          setCurrentUser({
            _id: response._id,
            email: response.email,
            name: response.name,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <ProtectedRoute
            exact
            path="/saved-news"
            component={SavedNews}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            getSavedNews={getSavedNews}
            onRemoveBookmark={removeBookmark}
          />
          <Route path="/">
            <Main
              isLoggedIn={isLoggedIn}
              onOpenLoginPopup={openLoginPopup}
              onOpenSignUpPopup={openSignUpPopup}
              onLogout={handleLogout}
              searchNews={searchNews}
              onCreateBookmark={createBookmark}
              onRemoveBookmark={removeBookmark}
            />
          </Route>
        </Switch>
        <Footer />

        <PopupWithLoginForm
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onLogin={handleLogin}
          onOpenSignUpPopup={openSignUpPopup}
        />

        <PopupWithSignUpForm
          isOpen={isSignUpPopupOpen}
          onClose={closeAllPopups}
          onSignUp={handleSignUp}
          onOpenLoginPopup={openLoginPopup}
        />

        <PopupSignedUp
          isOpen={isSignUpMessagePopupOpen}
          onClose={closeAllPopups}
          onOpenLoginPopup={openLoginPopup}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
