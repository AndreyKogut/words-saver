import { Meteor } from 'meteor/meteor';
import { Lists } from './lists';
import { Words } from '../words/words';

Meteor.publishComposite('Lists.all', function getAll() {
  if (!Meteor.userId()) {
    return this.ready();
  }

  return {
    find() {
      return Lists.find();
    },

    children: [
      {
        find({ _id }) {
          return Words.find({ listId: _id });
        },
      },
    ],
  };
});
