import {
  cardListContainer, secondaryApi,
} from '../constants/secondaryConst';

export class CardSecondary {
  constructor(id, keyword, date, title, content, source, image, link) {
    this.container = this.create(id, keyword, date, title, content, source, image, link);
  }

  create(id, keyword, date, title, content, source, image, link) {
    const container = document.createElement('div');
    const articleImage = document.createElement('div');
    const iconContainer = document.createElement('div');
    const tag = document.createElement('p');
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
    container.appendChild(tag);
    container.appendChild(iconContainer);
    iconContainer.appendChild(iconText);
    iconContainer.appendChild(icon);
    container.appendChild(article);
    container.appendChild(articleSource);
    article.appendChild(articleDate);
    article.appendChild(articleHeader);
    article.appendChild(articleText);

    container.classList.add('content__card');
    tag.classList.add('content__tag');
    tag.textContent = keyword;
    articleImage.classList.add('content__image');
    articleImage.style.backgroundImage = `url(${image})`;
    iconContainer.classList.add('content__icon-container');
    iconText.classList.add('content__icon-text');
    iconText.textContent = 'Убрать из сохранённых';
    iconText.classList.add('hidden');
    icon.classList.add('content__icon');
    icon.classList.add('content__icon_trash');
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
    articleSource.href = link;
    articleSource.target = '_blank';

    icon.addEventListener('mouseover', () => {
      iconText.classList.remove('hidden');
      iconContainer.classList.add('gap');
    });
    icon.addEventListener('mouseout', () => {
      iconText.classList.add('hidden');
      iconContainer.classList.remove('gap');
    });
    icon.addEventListener('click', () => {
      secondaryApi.deleteArticle(id);
    });
  }
}
