import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import WordsList from '../../components/WordsList/WordsList';
import WordForm from '../../components/WordForm';

const ListWords = props => (
  <div className="container">
    <h1 className="text-center">
      {props.list.title}
      <span className="margin-left--small">
        <Link to={`./${props.list._id}/foreign-to-native`} className="btn btn-link">
          Я-Z
        </Link>
        <Link to={`./${props.list._id}/native-to-foreign`} className="btn btn-link">
          Z-Я
        </Link>
      </span>
    </h1>

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
