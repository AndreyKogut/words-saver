import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Words } from './words';
import { MongoId } from '../helpers';

Meteor.publish('Words.all', function getAll() {
  if (!this.userId) {
    return this.ready();
  }

  return Words.find();
});

Meteor.publish('Words.byListId', function getByListId(listId) {
  check(listId, MongoId);

  if (!this.userId) {
    return this.ready();
  }

  return Words.find({ listId });
});
