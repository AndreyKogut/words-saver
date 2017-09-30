import { check, Match } from 'meteor/check';

const MongoId = Match.Where((id) => {
  check(id, String);

  return /[0-9a-zA-Z]{17}/.test(id);
});

export {
  MongoId,
};
