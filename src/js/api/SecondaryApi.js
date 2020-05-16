import {
  headerButtonName, headerArticlesName, savedArticleNumber, tagsBlock, savedArticles, tagFirst, tagAnd, tagOther, savedArticleText, cardListContainer,
  noResults, menuLogoutName,
} from '../constants/secondaryConst';

import { CardListSecondary } from '../classes/CardListSecondary';

export class SecondaryApi {
  myData() {
    fetch('https://www.news-searcher.site/api/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          document.location.href = '../../index.html';
        }
        return res.json();
      })
      .then((data) => {
        headerButtonName.textContent = data.name;
        headerArticlesName.textContent = data.name;
        menuLogoutName.textContent = data.name;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logout() {
    fetch('https://www.news-searcher.site/api/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          document.location.href = '../../index.html';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getMyArticles() {
    fetch('https://www.news-searcher.site/api/myarticles', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const myArr = data.articles;
        savedArticleNumber.textContent = myArr.length;
        if (myArr.length === 0) {
          savedArticleNumber.textContent = 'пока нет';
          savedArticleText.textContent = 'сохранённых статей';
          tagsBlock.classList.add('hidden');
          savedArticles.classList.add('hidden');
          noResults.classList.remove('hidden');
        } else if (myArr.length === 1) {
          savedArticleNumber.textContent = myArr.length;
          savedArticleText.textContent = 'сохранённая статья';
        } else if (myArr.length > 1 & myArr.length < 5) {
          savedArticleNumber.textContent = myArr.length;
          savedArticleText.textContent = 'сохранённых статьи';
        }
        const tagArr = Array.from(new Set(myArr.map((element) => element.keyword)));
        if (tagArr.length > 3) {
          tagFirst.textContent = `${tagArr[0]}, ${tagArr[1]}`;
          tagAnd.textContent = 'и';
          tagOther.textContent = `${tagArr.length - 2} другим`;
        } else if (tagArr.length === 3) {
          tagFirst.textContent = `${tagArr[0]}, ${tagArr[1]}`;
          tagAnd.textContent = 'и';
          tagOther.textContent = tagArr[2];
        } else if (tagArr.length === 2) {
          tagFirst.textContent = tagArr[0];
          tagAnd.textContent = 'и';
          tagOther.textContent = tagArr[1];
        } else if (tagArr.length === 1) {
          tagFirst.textContent = tagArr[0];
          tagAnd.textContent = '';
          tagOther.textContent = '';
        }
        new CardListSecondary(cardListContainer, myArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteArticle(articleId) {
    fetch(`https://www.news-searcher.site/api/articles/${articleId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        window.location.reload();
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
