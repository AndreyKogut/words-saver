import WordsList from '../pages/Words';
import SignIn from '../pages/SignIn';
import OnLoginPage from '../OnLoginPage';
import NoPermission from '../pages/NoPermission/NoPermission';

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
    name: 'NoPermission',
    path: '/rejected',
    component: NoPermission,
  },
  {
    name: 'Main',
    path: '/',
    component: WordsList,
  },
];
