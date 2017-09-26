import R from 'ramda';
import { Meteor } from 'meteor/meteor';

Meteor.users.allow({
  insert: R.F,
  update: R.F,
  remove: R.F,
});
