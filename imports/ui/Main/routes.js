import WordsFull from '../pages/WordsFull';
import Lists from '../pages/ListsFull';
import ListWords from '../pages/ListWords';
import ListWordsTrainingNativeForeign from '../pages/ListWordsTrainingNativeForeign/ListWordsTrainingNativeForeing';
import ListWordsTrainingForeingNative from '../pages/ListWordsTrainingForeignNative/ListWordsTrainingForeingNative';

export default [
  {
    name: 'List words training native to foreign',
    path: '/lists/:id/native-to-foreign',
    component: ListWordsTrainingNativeForeign,
  },
  {
    name: 'List words training foreign to native',
    path: '/lists/:id/foreign-to-native',
    component: ListWordsTrainingForeingNative,
  },
  {
    name: 'List words',
    path: '/lists/:id/',
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
