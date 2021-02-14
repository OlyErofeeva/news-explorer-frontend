import FacebookIcon from '../components/svg/FacebookIcon/FacebookIcon';
import GitHubIcon from '../components/svg/GitHubIcon/GitHubIcon';

// NB: id is used for string matching
const navigationLinks = [
  {
    id: 'home',
    text: 'Главная',
    link: '/',
  },
];

// NB: id is used for string matching
const authNavigationLinks = [
  {
    id: 'home',
    text: 'Главная',
    link: '/',
  },
  {
    id: 'bookmarks',
    text: 'Сохранённые статьи',
    link: '/saved-news',
  },
];

const externalLinks = [
  {
    text: 'Яндекс.Практикум',
    link: 'https://praktikum.yandex.ru/',
  },
];

const socialNetworksLinks = [
  {
    text: 'GitHub',
    link: 'https://github.com/OlyErofeeva',
    icon: GitHubIcon,
  },
  {
    text: 'Facebook',
    link: 'https://t.me/oly_erofeeva', // TODO: заменить ссылку на fb
    icon: FacebookIcon,
  },
];

export {
  navigationLinks,
  authNavigationLinks,
  externalLinks,
  socialNetworksLinks,
};
