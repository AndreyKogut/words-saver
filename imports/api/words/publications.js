import { Meteor } from 'meteor/meteor';

import { Words } from './words';

Meteor.publish('Words.all', function getAll() {
  if (!Meteor.userId()) {
    return this.ready();
  }

  return Words.find();
});
