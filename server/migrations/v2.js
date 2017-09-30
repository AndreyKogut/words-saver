import { Migrations } from 'meteor/percolate:migrations';
import { Lists } from '../../imports/api/lists/lists';
import { Words } from '../../imports/api/words/words';

Migrations.add({
  name: 'Created at field for words and lists',
  version: 2,

  up() {
    Lists.update({}, {
      $set: {
        createdAt: new Date(),
      },
    }, {
      multi: true,
    });

    Words.update({}, {
      $set: {
        createdAt: new Date(),
      },
      $unset: {
        seria: 1,
        season: 1,
      },
    }, {
      multi: true,
    });
  },
});
