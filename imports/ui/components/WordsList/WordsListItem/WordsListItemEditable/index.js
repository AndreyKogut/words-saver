import R from 'ramda';
import { withHandlers } from 'recompose';

import WordsListItemEditable from './WordsListItemEditable';

const handleOnChange = prop => ({ onChange }) =>
    event => onChange(R.assoc(prop, event.target.value, {}));

const enhance = withHandlers({
  onNameChange: handleOnChange('name'),
  onTranslationChange: handleOnChange('translation'),
});

export default enhance(WordsListItemEditable);
