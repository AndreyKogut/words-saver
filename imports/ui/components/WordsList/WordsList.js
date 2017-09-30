import React from 'react';
import PropTypes from 'prop-types';

import './WordsList.less';

const WordsList = ({ words }) => (
  <div className="words-list">
    {words.map(({ _id, name, translation }) => (
      <dl className="dl-horizontal" key={_id}>
        <dt><span className="words-list__word">{name}</span></dt>
        <dd>{translation}</dd>
      </dl>
    ))}
  </div>
);

WordsList.propTypes = {
  words: PropTypes.array.isRequired,
};

export default WordsList;
