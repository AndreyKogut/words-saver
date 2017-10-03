import React from 'react';
import PropTypes from 'prop-types';

import FullListTrainingItem from './FullListTrainingItem';

const FullListTraining = ({ words, visibleProp, hiddenProp }) => (
  <div>
    {words.map((word) => (
      <FullListTrainingItem
        key={word._id}
        visible={word[visibleProp]}
        hidden={word[hiddenProp]}
      />))}
  </div>
);

FullListTraining.propTypes = {
  words: PropTypes.array.isRequired,
  visibleProp: PropTypes.string.isRequired,
  hiddenProp: PropTypes.string.isRequired,
};

export default FullListTraining;
