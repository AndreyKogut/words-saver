import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Words } from './words';
import { MongoId } from '../helpers';
import { Lists } from '../lists/lists';

Meteor.methods({
  'Words.add'(listId, name, translation) {
    check(listId, MongoId);
    check(name, String);
    check(translation, String);

    if (!this.userId) {
      throw new Meteor.Error('Unauthorized');
    }

    if (!name.length || !translation.length) {
      throw new Meteor.Error('Error: you can not add empty values');
    }

    const list = Lists.findOne({ _id: listId });

    if (!list) {
      throw new Meteor.Error('Error: list is not found');
    }

    return Words.insert({ name, translation, listId });
  },

  'Words.remove'(wordId) {
    check(wordId, MongoId);

    if (!this.userId) {
      throw new Meteor.Error('Unauthorized');
    }

    return Words.remove({ _id: wordId });
  },

  'Words.update'(wordId, data) {
    check(wordId, MongoId);
    check(data, Object);

    if (!this.userId) {
      throw new Meteor.Error('Unauthorized');
    }

    return Words.update({ _id: wordId }, {
      $set: data,
    });
  },
});
