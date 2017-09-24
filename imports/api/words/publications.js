import { Meteor } from 'meteor/meteor';

import { Words } from './words';

Meteor.publish('Words.list', () => Words.find());
