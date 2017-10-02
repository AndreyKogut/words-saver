import { Meteor } from 'meteor/meteor';
import { compose, withState, withHandlers } from 'recompose';

import WordForm from './WordForm';
import { handleError } from '../../helpers';

const enhance = compose(
  withState('name', 'setName', ''),
  withState('translation', 'setTranslation', ''),
  withHandlers({
    cleanForm: ({ setName, setTranslation }) => () => {
      setName('');
      setTranslation('');
    },
  }),
  withHandlers({
    onNameChange: ({ setName }) => (event) => setName(event.target.value),
    onTranslationChange: ({ setTranslation }) => (event) => setTranslation(event.target.value),
    onSubmit: ({ name, translation, listId, cleanForm }) => (event) => {
      event.preventDefault();

      Meteor.call('Words.add', listId, name, translation, handleError(cleanForm));
    },
  })
);

export default enhance(WordForm);
