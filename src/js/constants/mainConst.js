import { Popup } from '../classes/Popup';
import { MainApi } from '../api/MainApi';

const mainApi = new MainApi();
const authButton = document.querySelector('.header__button-login');
const popupSigninContainer = document.querySelector('.popup-signin');
const popupSigninClose = document.querySelector('.popup-signin-close');
const popupSigninForm = new Popup(popupSigninContainer, authButton, popupSigninClose);
const popupSignupButton = document.querySelector('.popup__signup-button');
const popupSignupContainer = document.querySelector('.popup-signup');
const popupSignupClose = popupSignupContainer.querySelector('.popup-signup-close');
const popupSignupForm = new Popup(popupSignupContainer, popupSignupButton, popupSignupClose);
const popupSigninButton = document.querySelector('.popup__signin-button-js');
const popupButtonSignup = document.querySelector('.popup__button-signup');
const popupSuccessContainer = document.querySelector('.popup-success');
const popupSuccessClose = document.querySelector('.popup-success-close');
const popupSuccessSigninButton = document.querySelector('.popup__signin-button');
const menuButton = document.querySelector('.header__logo_menued');
const menuButtonLogged = document.querySelector('.header__logo_menued-logged');
const menu = document.querySelector('.menu');
const menuNavigationLoggedOut = document.querySelector('.menu__navigation_logged-out');
const menuNavigationLoggedin = document.querySelector('.menu__navigation_logged-in');
const menuClose = document.querySelector('.header__logo-close');
const popupAuthMenuButton = document.querySelector('.header__button-login-menu');
const popupButtonSignin = document.querySelector('.popup__button-login');
const inputSigninEmail = document.querySelector('#email');
const inputSigninPassword = document.querySelector('#password');
const inputSignupEmail = document.querySelector('#email2');
const inputSignupPassword = document.querySelector('#password2');
const inputSignupName = document.querySelector('#name');
const errorMessageSignup = document.querySelector('.error-message-signup');
const errorMessageSignin = document.querySelector('.error-message-signin');
const signupForm = document.forms.signup;
const signinForm = document.forms.signin;
const searchButton = document.querySelector('.search__button');
const headerLoggedOut = document.querySelector('.header-logged-out');
const headerLoggedIn = document.querySelector('.header-logged-in');
const headerButtonName = document.querySelector('.header-button-text');
const headerButtonLogout = document.querySelector('.header__button-logout');
const menuButtonLogout = document.querySelector('.menu-logout');
const menuLogoutName = document.querySelector('.menu-logout-name');
const cardListContainer = document.querySelector('.content__cards');
const noResults = document.querySelector('.no-results');
const showMoreButton = document.querySelector('.result__button');
const searchError = document.querySelector('.search__error');
const searchForm = document.forms.search;
const searchInput = document.getElementById('search');
const foundArticles = document.querySelector('.results');
const iconCard = document.querySelector('.content__icon');
const iconText = document.querySelector('.content__icon-text');
const iconContainer = document.querySelector('.content__icon-container');

export {
  popupSigninForm, popupSignupForm, popupSignupButton, popupSigninButton, popupSuccessSigninButton, menuButton, popupButtonSignup,
  menu, menuClose, popupAuthMenuButton, popupButtonSignin, inputSigninEmail, inputSigninPassword, inputSignupEmail, inputSignupPassword,
  inputSignupName, mainApi, errorMessageSignup, popupSuccessContainer, popupSuccessClose, signupForm, popupSignupContainer, signinForm,
  errorMessageSignin, searchButton, headerLoggedOut, headerLoggedIn, headerButtonLogout, headerButtonName, noResults, cardListContainer,
  showMoreButton, searchInput, searchForm, foundArticles, searchError, iconCard, iconText, iconContainer, menuButtonLogged, menuNavigationLoggedOut,
  menuNavigationLoggedin, menuButtonLogout, menuLogoutName,
};
