import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Lists } from './lists';
import { MongoId } from '../helpers';

Meteor.methods({
  'Lists.add'(title) {
    check(title, String);

    if (!this.userId) {
      throw Meteor.Error('Unauthorized');
    }

    if (!title.length) {
      throw Meteor.Error('Invalid name');
    }

    return Lists.insert({ title });
  },

  'Lists.remove'(listId) {
    check(listId, MongoId);

    if (!this.userId) {
      throw Meteor.Error('Unauthorized');
    }

    return Lists.remove({ _id: listId });
  },
});
