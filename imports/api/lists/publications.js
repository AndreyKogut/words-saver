import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Lists } from './lists';
import { Words } from '../words/words';
import { MongoId } from '../helpers';

Meteor.publishComposite('Lists.all', function getAll() {
  if (!this.userId) {
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

Meteor.publishComposite('Lists.byListId', function byListId(id) {
  check(id, MongoId);

  if (!this.userId) {
    return this.ready();
  }

  return {
    find() {
      return Lists.find({ _id: id });
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
