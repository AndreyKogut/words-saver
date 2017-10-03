import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Words } from '../../../api/words/words';

import FullListTraining from './FullListTraining';
import unmountEnhancer from '../../components/UnmountEnhancer';

export default createContainer(({ listId }) => {
  const subsHandler = Meteor.subscribe('Words.byListId', listId);

  return {
    words: _.shuffle(Words.find({ listId }).fetch()),
    onUnmount: () => subsHandler.stop(),
  };
}, unmountEnhancer(FullListTraining));
