import React from 'react';
import PropTypes from 'prop-types';

const WordsList = ({ words }) => (
  <div className="col-12-xs">
    {words.map(({ _id, name, translation }) => (
      <dl className="dl-horizontal" key={_id}>
        <dt>{name}</dt>
        <dd>{translation}</dd>
      </dl>
    ))}
  </div>
);

WordsList.propTypes = {
  words: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default WordsList;
