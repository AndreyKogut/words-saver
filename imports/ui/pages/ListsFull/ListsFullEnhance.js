import { Meteor } from 'meteor/meteor';
import { compose, withHandlers, withState } from 'recompose';

import ListFull from './ListsFull';
import unmountEnhancer from '../../components/UnmountEnhancer';

const enhance = compose(
  unmountEnhancer,
  withState('listTitle', 'setListTitle', ''),
  withHandlers({
    setListValue: ({ setListTitle }) => (event) => {
      setListTitle(event.target.value);
    },
    onSubmit: ({ listTitle, setListTitle }) => (event) => {
      event.preventDefault();

      if (listTitle) {
        Meteor.call('Lists.add', listTitle);
        setListTitle('');
      }
    },
  })
);

export default enhance(ListFull);
