import FacebookIcon from '../components/svg/FacebookIcon/FacebookIcon';
import GitHubIcon from '../components/svg/GitHubIcon/GitHubIcon';

const navigationLinks = [
  {
    text: 'Главная',
    link: '/',
  },
];

const authNavigationLinks = [
  {
    text: 'Главная',
    link: '/',
  },
  {
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
