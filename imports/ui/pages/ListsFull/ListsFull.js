import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Words } from '../../../api/words/words';

const getWordsCount = listId => Words.find({ listId }).count();

const Lists = ({ lists }) => (
  <div className="container">
    {lists.map(({ _id, title }) => (
      <p key={_id}>
        <Link to={`/lists/${_id}/words`}>
          {title} ({getWordsCount(_id)})
        </Link>
      </p>
    ))}
  </div>
);

Lists.propTypes = {
  lists: PropTypes.array.isRequired,
};

export default Lists;
