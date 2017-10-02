import React from 'react';
import PropTypes from 'prop-types';

const WordsListItemStatic = ({ name, translation }) => (
  <div className="words-list__item">
    <dt><span className="words-list__word">{name}</span></dt>
    <dd>{translation}</dd>
  </div>
);

WordsListItemStatic.propTypes = {
  name: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
};

export default WordsListItemStatic;
