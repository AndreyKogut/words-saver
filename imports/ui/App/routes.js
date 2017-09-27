import WordsList from '../pages/Words';
import SignIn from '../pages/SignIn';

export default [
  {
    name: 'SignIn',
    path: '/sign-in',
    component: SignIn,
  },
  {
    name: 'Main',
    path: '/',
    component: WordsList,
  },
];
