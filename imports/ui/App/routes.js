import WordsList from '../pages/Words';
import SignIn from '../pages/SignIn';
import OnLoginPage from '../OnLoginPage';

export const listeners = [
  {
    name: 'SignUpChecking',
    component: OnLoginPage,
  },
];

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
