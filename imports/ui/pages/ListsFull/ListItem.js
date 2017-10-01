import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Words } from '../../../api/words/words';
import SubmitModal from '../../components/SubmitModal/index';

const getWordsCount = listId => Words.find({ listId }).count();

const ListItem = ({ _id, title, onRemove }) => (
  <div className="list__item margin-bottom--small">
    <Link to={`/lists/${_id}`}>
      {title} ({getWordsCount(_id)})
    </Link>
    <SubmitModal
      title="Removing list"
      description={`Are you sure you want to remove ${title} list?`}
      onSubmit={onRemove}
      iconStyles="fa fa-times text-danger"
      buttonStyles="btn btn-link margin-left--small"
    />
  </div>
);

ListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ListItem;
