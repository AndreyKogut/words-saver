import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Lists } from '../../../api/lists/lists';
import unmountEnhancer from '../../components/UnmountEnhancer';
import ListsFull from './ListsFull';

export default createContainer(() => {
  const subsHandler = Meteor.subscribe('Lists.all');

  return {
    lists: Lists.find({}, { sort: { createdAt: 1 } }).fetch(),
    onUnmount: () => subsHandler.stop(),
  };
}, unmountEnhancer(ListsFull));
