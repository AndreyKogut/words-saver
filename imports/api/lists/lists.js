import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Lists = new Mongo.Collection('lists');

const ListsSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'List title',
  },
});

Lists.attachSchema(ListsSchema);
