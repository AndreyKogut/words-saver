import { Meteor } from 'meteor/meteor';
import { compose, withState, withHandlers } from 'recompose';

import { handleError } from '../../../helpers';

import WordsListItem from './WordsListItem';

const enhance = compose(
  withState('isEditable', 'setIsEditable', false),
  withHandlers({
    showEditor: ({ setIsEditable }) => () => setIsEditable(true),
    hideEditor: ({ setIsEditable }) => () => setIsEditable(false),
    onRemove: ({ word }) => () => Meteor.call('Words.remove', word._id, handleError()),
    onChange: ({ word }) => data => Meteor.call('Words.update', word._id, data, handleError()),
  })
);

export default enhance(WordsListItem);
