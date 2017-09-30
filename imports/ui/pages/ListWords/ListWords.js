import React from 'react';
import PropTypes from 'prop-types';

import WordsList from '../../components/WordsList/WordsList';

const ListWords = (props) => (
  <div className="content">
    <WordsList {...props} />
  </div>
);

ListWords.propTypes = {
  words: PropTypes.array.isRequired,
};

export default ListWords;
