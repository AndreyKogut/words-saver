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
    optional: true,
  },

  seria: {
    type: Number,
    label: 'Seria number',
    optional: true,
  },

  listId: {
    type: String,
    label: 'List id',
  },

  createdAt: {
    type: Date,
    label: 'Creation date',
    defaultValue: new Date(),
  },
});

Words.attachSchema(WordsSchema);
