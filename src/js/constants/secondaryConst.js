import { SecondaryApi } from '../api/SecondaryApi';

const secondaryApi = new SecondaryApi();
const headerButtonName = document.querySelector('.header-button-name');
const headerArticlesName = document.querySelector('.header-articles-name');
const headerButtonLogout = document.querySelector('.header__button_circled');
const savedArticleNumber = document.querySelector('.my-arr-length');
const savedArticleText = document.querySelector('.my-arr-text');
const tagsBlock = document.querySelector('.articles__text');
const savedArticles = document.querySelector('.results_saved-articles');
const tagFirst = document.querySelector('.tag-first');
const tagAnd = document.querySelector('.tag-and');
const tagOther = document.querySelector('.tag-other');
const cardListContainer = document.querySelector('.content__cards-saved-articles');
const noResults = document.querySelector('.no-results');
const menuButton = document.querySelector('.header__logo_menued');
const menu = document.querySelector('.menu');
const menuButtonLogout = document.querySelector('.menu-logout');
const menuClose = document.querySelector('.menu-close');
const menuLogoutName = document.querySelector('.menu-logout-name');

export {
  headerButtonName, headerArticlesName, secondaryApi, headerButtonLogout, savedArticleNumber, tagsBlock, savedArticles, tagFirst, tagAnd,
  tagOther, savedArticleText, cardListContainer, noResults, menuButton, menu, menuButtonLogout, menuClose, menuLogoutName,
};
