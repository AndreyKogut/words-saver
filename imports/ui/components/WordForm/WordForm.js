import React from 'react';
import PropTypes from 'prop-types';

const WordForm = ({ name, translation, onNameChange, onTranslationChange, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    <div className="form-group">
      <label htmlFor="name" className="control-label">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="form-control"
        value={name}
        onChange={onNameChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="translation" className="control-label">
        Translation:
      </label>
      <input
        type="text"
        id="translation"
        className="form-control"
        value={translation}
        onChange={onTranslationChange}
      />
    </div>
    <div className="form-group">
      <input type="submit" value="Add word" className="btn btn-primary" />
    </div>
  </form>
);

WordForm.propTypes = {
  name: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onTranslationChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default WordForm;
