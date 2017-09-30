import WordsFull from '../pages/WordsFull';
import Lists from '../pages/ListsFull';
import ListWords from '../pages/ListWords';

export default [
  {
    name: 'List words',
    path: '/lists/:id',
    component: ListWords,
  },
  {
    name: 'Lists',
    path: '/lists',
    component: Lists,
  },
  {
    name: 'Full list',
    path: '/',
    component: WordsFull,
  },
];
