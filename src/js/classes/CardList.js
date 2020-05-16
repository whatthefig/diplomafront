import { Card } from './Card';
import { foundArticles, showMoreButton } from '../constants/mainConst';

export class CardList {
  constructor(container, array) {
    this.container = container;
    this.array = array;
    this.render();
  }

  refreshCardsContainer() {
    const cards = document.querySelectorAll('.content__card');
    cards.forEach((card) => {
      card.remove();
    });
  }

  render() {
    this.refreshCardsContainer();
    foundArticles.classList.remove('hidden');
    this.array.forEach((card) => {
      const date = card.publishedAt.split('T')[0];
      const { title } = card;
      const content = card.description;
      const source = card.source.name;
      const image = card.urlToImage;
      const { url } = card;
      new Card(date, title, content, source, image, url);
    });
    const cards = Array.from(document.querySelectorAll('.hidden-card'));
    const shownCards = cards.splice(0, 3);
    shownCards.forEach((element) => element.classList.remove('hidden-card'));
    if (cards.length < 4) {
      showMoreButton.classList.add('hidden');
    } else {
      showMoreButton.classList.remove('hidden');
    }
  }
}
