import {
  secondaryApi, headerButtonLogout, menuButton, menu, menuButtonLogout, menuClose,
} from './constants/secondaryConst';

secondaryApi.myData();

headerButtonLogout.addEventListener('click', () => {
  secondaryApi.logout();
});

menuButtonLogout.addEventListener('click', () => {
  secondaryApi.logout();
});

secondaryApi.getMyArticles();

menuButton.addEventListener('click', () => {
  menu.classList.remove('hidden');
});

menuClose.addEventListener('click', () => {
  menu.classList.add('hidden');
});
