import { createProfileTemplate } from './view/profile-view.js';
import { createSiteMenuTemplate } from './view/site-menu-view.js';
import { createSortFilmsTemplate } from './view/sort-films-view.js';
import { createFilmsTemplate } from './view/films-view.js';
import { createFilmCardTemplate } from './view/film-card-view.js';
import { createLoadMoreButtonTemplate } from './view/load-more-button-view.js';
import { createFilmDetailsTemplate } from './view/film-details.js';
import { createFooterStatisticsTemplate } from './view/footer-statistics.js';
import { renderTemplate, RenderPosition } from './render.js';

const FILM_COUNT = 5;

const siteHeaderElement = document.querySelector('.header');
const siteHeaderLogoElement = siteHeaderElement.querySelector('.header__logo');

renderTemplate(siteHeaderLogoElement, createProfileTemplate(), RenderPosition.AFTEREND);

const siteMainElement = document.querySelector('.main');

renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSortFilmsTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmsTemplate(), RenderPosition.BEFOREEND);

const filmsElement = siteMainElement.querySelector('.films');
const filmListElement = filmsElement.querySelector('.films-list__container');


for (let i = 0; i < FILM_COUNT; i++) {
  renderTemplate(filmListElement, createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(filmListElement, createLoadMoreButtonTemplate(), RenderPosition.AFTEREND);

renderTemplate(siteMainElement, createFilmDetailsTemplate(), RenderPosition.BEFOREEND);


const siteFooterElement = document.querySelector('.footer');
const siteFooterLogoElement = siteFooterElement.querySelector('.footer__logo');

renderTemplate(siteFooterLogoElement, createFooterStatisticsTemplate(), RenderPosition.AFTEREND);
