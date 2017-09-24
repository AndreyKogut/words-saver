import React from 'react';
import PropTypes from 'prop-types';

const WordsList = ({ words }) => (<div className="container-flex">
  {words.map(({ _id, name, translation }) => (<p key={_id}>
    {name} - <b>{translation}</b>
  </p>))}
</div>);

WordsList.propTypes = {
  words: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default WordsList;
