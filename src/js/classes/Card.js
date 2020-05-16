import {
  cardListContainer, headerLoggedOut, headerLoggedIn, mainApi,
} from '../constants/mainConst';

export class Card {
  constructor(date, title, content, source, image, url) {
    this.container = this.create(date, title, content, source, image, url);
  }

  create(date, title, content, source, image, url) {
    const container = document.createElement('div');
    const articleImage = document.createElement('div');
    const iconContainer = document.createElement('div');
    const iconText = document.createElement('p');
    const icon = document.createElement('button');
    const article = document.createElement('div');
    const articleContainer = document.createElement('div');
    const articleDate = document.createElement('p');
    const articleHeader = document.createElement('h3');
    const articleText = document.createElement('p');
    const articleSource = document.createElement('a');

    cardListContainer.appendChild(container);
    container.appendChild(articleImage);
    container.appendChild(iconContainer);
    iconContainer.appendChild(iconText);
    iconContainer.appendChild(icon);
    container.appendChild(article);
    container.appendChild(articleSource);
    article.appendChild(articleDate);
    article.appendChild(articleHeader);
    article.appendChild(articleText);

    container.classList.add('content__card');
    container.classList.add('hidden-card');
    articleImage.classList.add('content__image');
    articleImage.style.backgroundImage = `url(${image})`;
    iconContainer.classList.add('content__icon-container');
    iconText.classList.add('content__icon-text');
    iconText.textContent = 'Войдите, чтобы сохранять статьи';
    iconText.classList.add('hidden');
    icon.classList.add('content__icon');
    article.classList.add('content__article');
    articleContainer.classList.add('content__article');
    articleDate.classList.add('content__article-date');
    articleDate.textContent = date;
    articleHeader.classList.add('content__article-header');
    articleHeader.textContent = title;
    articleText.classList.add('content__article-text');
    articleText.textContent = content;
    articleSource.classList.add('content__article-source');
    articleSource.textContent = source;
    articleSource.href = url;
    articleSource.target = '_blank';
    icon.addEventListener('mouseover', () => {
      icon.classList.add('content__icon_hovered');
    });
    icon.addEventListener('mouseout', () => {
      icon.classList.remove('content__icon_hovered');
    });

    if (headerLoggedIn.classList.contains('hidden')) {
      icon.addEventListener('mouseover', () => {
        iconText.classList.remove('hidden');
        iconContainer.classList.add('gap');
      });
      icon.addEventListener('mouseout', () => {
        iconText.classList.add('hidden');
        iconContainer.classList.remove('gap');
      });
    } if (headerLoggedOut.classList.contains('hidden')) {
      icon.addEventListener('click', () => {
        icon.classList.toggle('content__icon_chosen');
        mainApi.saveArticle(title, date, content, source, image, url);
      });
    }
  }
}
