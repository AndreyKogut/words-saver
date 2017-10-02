import R from 'ramda';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import UnmountEnhancer from '../../components/UnmountEnhancer';
import ListWords from './ListWords';
import { Words } from '../../../api/words/words';
import { Lists } from '../../../api/lists/lists';

export default createContainer((props) => {
  const listId = R.pathOr('', ['match', 'params', 'id'], props);
  const subsHandler = Meteor.subscribe('Lists.byListId', listId);

  return {
    list: Lists.findOne({ _id: listId }) || {},
    words: Words.find({ listId }, { sort: { createdAt: -1 } }).fetch(),
    onUnmount: () => subsHandler.stop(),
  };
}, UnmountEnhancer(ListWords));
