import {
  popupSigninForm, popupSignupForm, popupSignupButton, popupSigninButton, menuButton, popupButtonSignup, mainApi, popupSuccessContainer,
  menu, menuClose, popupAuthMenuButton, inputSigninEmail, inputSigninPassword, inputSignupEmail, inputSignupPassword, inputSignupName,
  popupSuccessSigninButton, popupSuccessClose, popupButtonSignin, searchButton, headerButtonLogout, searchError, searchInput, foundArticles,
  showMoreButton, menuButtonLogged, menuNavigationLoggedOut, menuNavigationLoggedin, menuButtonLogout,
} from './constants/mainConst';

import { handleValidate } from './classes/validation';

import NewsApi from './api/NewsApi';

menuClose.addEventListener('click', () => {
  menu.classList.add('hidden');
});

popupSignupButton.addEventListener('click', () => {
  popupSigninForm.close();
});

popupSigninButton.addEventListener('click', () => {
  popupSignupForm.close();
  popupSigninForm.open();
});

menuButton.addEventListener('click', () => {
  menu.classList.remove('hidden');
  menuNavigationLoggedOut.classList.remove('hidden');
  menuNavigationLoggedin.classList.add('hidden');
});

menuButtonLogged.addEventListener('click', () => {
  menu.classList.remove('hidden');
  menuNavigationLoggedOut.classList.add('hidden');
  menuNavigationLoggedin.classList.remove('hidden');
});

popupAuthMenuButton.addEventListener('click', () => {
  menu.classList.add('hidden');
  popupSigninForm.open();
});

popupSuccessSigninButton.addEventListener('click', () => {
  popupSuccessContainer.classList.add('hidden');
  popupSigninForm.open();
});

popupSuccessClose.addEventListener('click', () => {
  popupSuccessContainer.classList.add('hidden');
});

inputSigninEmail.addEventListener('input', handleValidate);
inputSigninPassword.addEventListener('input', handleValidate);
inputSignupEmail.addEventListener('input', handleValidate);
inputSignupPassword.addEventListener('input', handleValidate);
inputSignupName.addEventListener('input', handleValidate);
searchInput.addEventListener('input', () => {
  searchError.classList.add('hidden');
});


popupButtonSignup.addEventListener('click', () => {
  event.preventDefault();
  mainApi.signup(inputSignupEmail.value, inputSignupPassword.value, inputSignupName.value);
});

popupButtonSignin.addEventListener('click', () => {
  event.preventDefault();
  mainApi.signin(inputSigninEmail.value, inputSigninPassword.value);
});

headerButtonLogout.addEventListener('click', () => {
  mainApi.logout();
});

menuButtonLogout.addEventListener('click', () => {
  mainApi.logout();
});

mainApi.myData();

searchButton.addEventListener('click', () => {
  if (!searchInput.checkValidity()) {
    event.preventDefault();
    searchError.classList.remove('hidden');
  } else {
    event.preventDefault();
    foundArticles.classList.add('hidden');
    new NewsApi(searchInput.value);
  }
});

showMoreButton.addEventListener('click', () => {
  const cards = Array.from(document.querySelectorAll('.hidden-card'));
  const shownCards = cards.splice(0, 3);
  shownCards.forEach((element) => element.classList.remove('hidden-card'));
  if (cards.length === 0) {
    showMoreButton.classList.add('hidden');
  } else {
    showMoreButton.classList.remove('hidden');
  }
});
