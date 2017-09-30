import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Words } from '../../../api/words/words';

import unmountEnhancer from '../../components/UnmountEnhancer';
import WordsFull from './WordsFull';

export default createContainer(() => {
  const subsHandler = Meteor.subscribe('Words.all');

  return {
    words: Words.find({}, { sort: { createdAt: 1 } }).fetch(),
    onUnmount: () => subsHandler.stop(),
  };
}, unmountEnhancer(WordsFull));
