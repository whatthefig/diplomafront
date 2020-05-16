import { CardList } from '../classes/CardList';
import { cardListContainer, noResults } from '../constants/mainConst';

export default class NewsApi {
  constructor(keyword) {
    const now = new Date();
    const week = 604800000;
    const nowDate = now.getTime();
    const ago = nowDate - week;
    const lastweek = new Date(ago);
    const year = lastweek.getFullYear();
    const month = lastweek.getMonth() + 1;
    const day = lastweek.getDate() - 7;
    this.getNews(keyword, year, month, day);
  }

  getNews(keyword, year, month, day) {
    fetch(`${'https://newsapi.org/v2/everything?'
              + 'q='}${keyword}&`
              + `from=${year}-${month}-${day}&`
              + 'sortBy=date&'
              + 'apiKey=0b2e0a3b3cf34fbd83866fec0be6df42', {
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        if (result.articles.length === 0) {
          noResults.classList.remove('hidden');
        } else {
          noResults.classList.add('hidden');
          new CardList(cardListContainer, result.articles);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
