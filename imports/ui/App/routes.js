import Main from '../Main/Main';
import SignIn from '../pages/SignIn';
import NoPermission from '../pages/NoPermission/NoPermission';

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
    component: Main,
  },
];
