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

  season: {
    type: Number,
    label: 'Season number',
  },

  seria: {
    type: Number,
    label: 'Seria number',
  },

  listId: {
    type: String,
    label: 'List id',
  },
});

Words.attachSchema(WordsSchema);
