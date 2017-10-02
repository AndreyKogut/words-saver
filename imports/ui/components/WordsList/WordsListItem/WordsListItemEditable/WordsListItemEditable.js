import React from 'react';
import PropTypes from 'prop-types';

const WordsListItemEditable = ({ name, translation, onNameChange, onTranslationChange }) => (
  <div className="words-list__item">
    <dt>
      <input
        type="text"
        value={name}
        onChange={onNameChange}
        className="form-control"
      />
    </dt>
    <dd>
      <textarea
        value={translation}
        onChange={onTranslationChange}
        className="form-control"
      />
    </dd>
  </div>
);

WordsListItemEditable.propTypes = {
  name: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  onTranslationChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default WordsListItemEditable;
