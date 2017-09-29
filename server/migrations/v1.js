import R from 'ramda';
import { Migrations } from 'meteor/percolate:migrations';
import { Lists } from '../../imports/api/lists/lists';
import { Words } from '../../imports/api/words/words';

const updateWord = (listId) => (word) => {
  Words.update({ _id: word._id }, { $set: {
    listId,
  } });
};

const addSeriaToList = (seria) => {
  const listId = Lists.insert({ title: `Rick and Morty 1.${seria}` });

  Words.find({ seria }).forEach(updateWord(listId));
};

Migrations.add({
  name: 'Transform lists',
  version: 1,

  up() {
    Words._collection.rawCollection().distinct('seria')
      .then(R.map(addSeriaToList));
  },
});
