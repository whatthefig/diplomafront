import { CardSecondary } from './CardSecondary';

export class CardListSecondary {
  constructor(container, array) {
    this.container = container;
    this.array = array;
    this.render();
  }

  render() {
    this.array.forEach((card) => {
      const id = card._id;
      const { keyword } = card;
      const { date } = card;
      const { title } = card;
      const { text } = card;
      const { source } = card;
      const { image } = card;
      const { link } = card;
      new CardSecondary(id, keyword, date, title, text, source, image, link);
    });
  }
}
