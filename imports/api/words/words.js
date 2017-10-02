import R from 'ramda';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Words = new Mongo.Collection('words');

Words.allow({
  insert: R.F,
  update: R.F,
  remove: R.F,
});

const WordsSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Word',
  },

  translation: {
    type: String,
    label: 'Word translation',
  },

  listId: {
    type: String,
    label: 'List id',
  },

  createdAt: {
    type: Date,
    label: 'Creation date',
  },
});

Words.attachSchema(WordsSchema);
