import { Meteor } from 'meteor/meteor';
import { compose, withHandlers, withState } from 'recompose';

import ListFull from './ListsFull';
import unmountEnhancer from '../../components/UnmountEnhancer';
import { handleError } from '../../helpers';

const enhance = compose(
  unmountEnhancer,
  withState('listTitle', 'setListTitle', ''),
  withHandlers({
    setListValue: ({ setListTitle }) => (event) => {
      setListTitle(event.target.value);
    },
    onCreate: ({ listTitle, setListTitle }) => (event) => {
      event.preventDefault();

      if (listTitle) {
        Meteor.call('Lists.add', listTitle, handleError(() => setListTitle('')));
      }
    },
    handleRemove: () => (listId) => () => {
      Meteor.call('Lists.remove', listId, handleError());
    },
  })
);

export default enhance(ListFull);
