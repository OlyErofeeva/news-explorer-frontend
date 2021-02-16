import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// next stage TODO: enable "react/prop-types" for eslint
// next stage TODO: use classnames
// next stage TODO: generate _id for newsApi response & use id for keys
// next stage TODO: consider refactoring in svg file structure
// next stage TODO: minimize header when a popup opens (mobile)
// next stage TODO: склонения, в т.ч. для кол-ва ключевых слов: "и по 2-м другим"
// next stage TODO: текст, когда у пользователя нет сохраненных карточек
// next stage TODO: доработать truncate, чтобы не отрезать части слов
// TODO: typography mix
// TODO: общие стили секций - mix

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithLoginForm from '../PopupWithForm/PopupWithLoginForm';
import PopupWithSignUpForm from '../PopupWithForm/PopupWithSignUpForm';
import PopupSignedUp from '../PopupSignedUp/PopupSignedUp';

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
