// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateTitle = () => {
  const titles = [
    'Made for each other', 'Popeye meets sinbad', 'Sagebrush trail',
    'Santa claus conquers the martians', 'The dance of life', 'The great flamarion',
    'The man with the golden arm'
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generatePoster = (title) => { // доработать, относительный путь
  const namePoster = title.toLowerCase().split(' ').join('-');
  return `/public/images/posters/${namePoster}.png`;
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateGenre = () => {
  const genres = [
    'action', 'drama', 'comedy', 'romance', 'historical', 'documentary',
    'anime', 'horror', 'thriller'
  ];

  const randomIndex = getRandomInteger(0, genres.length - 1);

  return genres[randomIndex];
};

const generateDirector = () => {
  const directors = [
    'Crostopher Nolan', 'Woody Allen', 'George Lucas', 'Alfred Hitchcock', 'Roman Polański',
    'Тимур Бекмамбетов', 'Марюс Вайсберг'
  ];

  const randomIndex = getRandomInteger(0, directors.length - 1);

  return directors[randomIndex];
};

const generateStars = () => { // доработать, актёров может быть несколько
  const stars = [
    'Leonardo DiCaprio', 'Ashley Judd', 'Kate Winslet', 'Федор Бондарчук',
    'Ryan Gosling', 'Russell Crowe', 'Robin Williams', 'Antony Hopkins', 'Edward Norton'
  ];

  const randomIndex = getRandomInteger(0, stars.length - 1);

  return stars[randomIndex];
};

const generateCountry = () => {
  const countries = [
    'USA', 'Россия', 'Франция', 'Германия', 'Корея'
  ];

  const randomIndex = getRandomInteger(0, countries.length - 1);

  return countries[randomIndex];
};

const generateAuthors = () => { // доработать, авторов может быть несколько
  const authors = [
    'Билли Уайлдер', 'Итан и Джоэл Коэны', 'Роберт Таун', 'Квентин Тарантино',
    'Френсис Форд Коппола', 'Уильям Голдман', 'Нора Эфрон', 'Роман Кантор'
  ];

  const randomIndex = getRandomInteger(0, authors.length - 1);

  return authors[randomIndex];
};

const generateRatio = () => {
  const ratio = [
    '8.8', '4.5', '9.0', '4.3', '6.7', '7.7'
  ];

  const randomIndex = getRandomInteger(0, ratio.length - 1);

  return ratio[randomIndex];
};

const generateDuration = () => {
  const duration = [
    '1ч 18м', '2ч 20м', '1ч 35м', '37м', '1ч 45м', '2ч 05м'
  ];

  const randomIndex = getRandomInteger(0, duration.length - 1);

  return duration[randomIndex];
};

export const generateFilm = () => ({
  id: getRandomInteger(0, 20),
  title: generateTitle(),
  poster: generatePoster(),//файлы из папки /public/images/posters - функция
  description: generateDescription(),
  genre: generateGenre(),
  director: generateDirector(),
  stars: generateStars(), //['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
  country: generateCountry(),
  authors: generateAuthors(),
  ratio: generateRatio(),
  isTop250: true,
  year: getRandomInteger(1950, 2022),
  duration: generateDuration(),
  comments: [1, 2],
  isWatchlist: false,
  isWatched: false,
  isFavorite: false,
});

// const comments = [
//   {
//     id: 1,
//     text: 'Отличный фильм',
//     emotions: '',
//     dateCreation: '',
//     author: '...',
//   },
//   {
//     id: 2,
//     text: 'Super film!',
//     emotions: '',
//     dateCreation: '',
//     author: '...',
//   },
//   {
//     id: 3,
//     text: 'Можно посмотреть на один раз',
//     emotions: '',
//     dateCreation: '',
//     author: '...',
//   },
//   {
//     id: 4,
//     text: 'Есть о чем подумать',
//     emotions: '',
//     dateCreation: '',
//     author: '...',
//   },
//   {
//     id: 5,
//     text: 'Скучный. Недосмотрел, уснул пока смотрел',
//     emotions: '',
//     dateCreation: '',
//     author: '...',
//   }
// ];
