import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Words } from '../../../api/words/words';

const getWordsCount = listId => Words.find({ listId }).count();

const Lists = ({ lists, listTitle, setListValue, onSubmit }) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-6 pull-right">
        <form className="form-group" onSubmit={onSubmit}>
          <input
            type="text"
            value={listTitle}
            onChange={setListValue}
            className="form-control"
          />
          <input type="submit" value="Add list" className="form-control" />
        </form>
      </div>
      <div className="col-xs-12 col-sm-6">
        {lists.map(({ _id, title }) => (
          <p key={_id}>
            <Link to={`/lists/${_id}`}>
              {title} ({getWordsCount(_id)})
            </Link>
          </p>
        ))}
      </div>
    </div>
  </div>
);

Lists.propTypes = {
  lists: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  listTitle: PropTypes.string.isRequired,
  setListValue: PropTypes.func.isRequired,
};

export default Lists;
