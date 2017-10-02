import React from 'react';
import PropTypes from 'prop-types';

import WordsList from '../../components/WordsList/WordsList';
import WordForm from '../../components/WordForm';

const ListWords = props => (
  <div className="container">
    <h1 className="text-center">{props.list.title}</h1>

    <WordForm listId={props.list._id} />

    <h2>Words</h2>

    <WordsList {...props} />
  </div>
);

ListWords.propTypes = {
  words: PropTypes.array.isRequired,
  list: PropTypes.object.isRequired,
};

export default ListWords;
