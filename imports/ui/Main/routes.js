import WordsFull from '../pages/WordsFull';
import Lists from '../pages/ListsFull';
import ListWords from '../pages/ListWords';
import ListWordsTrainingNativeForeign from '../pages/ListWordsTrainingNativeForeign/ListWordsTrainingNativeForeing';

export default [
  {
    name: 'List words training native to foreign',
    path: '/lists/:id/native-to-foreign',
    component: ListWordsTrainingNativeForeign,
  },
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
