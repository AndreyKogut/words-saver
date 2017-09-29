import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Lists } from './lists';

Meteor.methods({
  'Lists.add'(title) {
    check(title, String);

    if (!Meteor.userId()) {
      throw Meteor.Error('Unauthorized');
    }

    return Lists.insert({ title });
  },
});
