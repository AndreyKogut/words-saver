import R from 'ramda';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import UnmountEnhancer from '../../components/UnmountEnhancer';
import ListWords from './ListWords';
import { Words } from '../../../api/words/words';

export default createContainer((props) => {
  const listId = R.pathOr('', ['match', 'params', 'id'], props);
  const subsHandler = Meteor.subscribe('Words.byListId', listId);

  return {
    words: Words.find({ listId }).fetch(),
    onUnmount: () => subsHandler.stop(),
  };
}, UnmountEnhancer(ListWords));
