import React from 'react';
import PropTypes from 'prop-types';

import WordsListItem from './WordsListItem';

import './WordsList.less';

const WordsList = ({ words }) => (
  <div className="words-list">
    {words.map(word => <WordsListItem key={word._id} word={word} />)}
  </div>
);

WordsList.propTypes = {
  words: PropTypes.array.isRequired,
};

export default WordsList;
