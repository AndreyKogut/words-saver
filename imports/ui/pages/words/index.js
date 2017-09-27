import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Words } from '../../../api/words/words';

import WordsList from './WordsList';

export default createContainer(() => {
  const subsHandler = Meteor.subscribe('Words.list');

  return {
    words: Words.find().fetch(),
    loading: !subsHandler.ready(),
  };
}, WordsList);
